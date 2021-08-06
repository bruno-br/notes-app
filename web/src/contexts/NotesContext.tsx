import { useEffect } from "react";
import { useState, createContext, ReactNode } from "react";
import { api } from "../services/api";

interface NoteData {
  id: string;
  title: string;
  description: string;
}

interface NotesContextData {
  notes: NoteData[];
  getNotes: () => void;
  createNote: (title: string, description: string) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext({} as NotesContextData);

interface NotesProviderProps {
  children: ReactNode;
}

function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState([] as NoteData[]);

  async function getNotes() {
    const { data } = await api.get("/notes");
    setNotes(data);
  }

  async function createNote(title: string, description: string) {
    const resp = await api.post("/notes", { title, description });
    if (resp.status === 201) {
      const newNote = resp.data as NoteData;
      if (newNote.id) {
        setNotes([...notes, newNote]);
      }
    }
  }

  async function deleteNote(id: string) {
    await api.delete("/notes", { data: { id } });
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) {
      let newNotes = notes;
      newNotes.splice(noteIndex, 1);
      setNotes([...newNotes]);
    }
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, getNotes, createNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
