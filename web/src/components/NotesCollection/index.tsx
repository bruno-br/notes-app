import "./styles.css";
import Note from "../Note";
import { api } from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";

interface NoteProps {
  id: string;
  title: string;
  description: string;
}

function NotePad() {
  const [notes, setNotes] = useState([] as NoteProps[]);

  async function getNotes() {
    const { data } = await api.get("/notes");
    setNotes(data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes-collection">
      <h1>Suas notas</h1>
      <div className="notes-grid">
        {notes.map((note) => (
          <Note
            note_id={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
      </div>
    </div>
  );
}

export default NotePad;
