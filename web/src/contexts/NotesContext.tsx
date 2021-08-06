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
}

const NotesContext = createContext({} as NotesContextData);

interface NotesProviderProps {
  children: ReactNode;
}

function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const { data } = await api.get("/notes");
    setNotes(data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, getNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
