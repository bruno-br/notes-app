import "./styles.css";
import { useState } from "react";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";

function NotePad() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createNote } = useContext(NotesContext);

  return (
    <div className="notepad">
      <h1>Bloco de notas</h1>
      <input
        placeholder="Assunto"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Texto"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="btn-container">
        <button onClick={() => createNote(title, description)}>
          CRIAR NOTA
        </button>
      </div>
    </div>
  );
}

export default NotePad;
