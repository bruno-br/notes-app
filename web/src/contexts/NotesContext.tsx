import { useState } from "react";
import { createContext, ReactNode } from "react";

interface NoteData {
  note_id: string;
  title: string;
  description: string;
}

interface NotesContextData {
  notes: NoteData[];
}

const NotesContext = createContext({} as NotesContextData);

interface NotesProviderProps {
  children: ReactNode;
}

function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState([]);
  return (
    <NotesContext.Provider value={{ notes }}>{children}</NotesContext.Provider>
  );
}

export { NotesContext, NotesProvider };
