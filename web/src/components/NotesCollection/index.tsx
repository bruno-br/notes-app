import "./styles.css";
import Note from "../Note";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";

function NotePad() {
  const { notes } = useContext(NotesContext);

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
