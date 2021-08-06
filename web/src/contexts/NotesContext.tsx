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

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, getNotes, createNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
