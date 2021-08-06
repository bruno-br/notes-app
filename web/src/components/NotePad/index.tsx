import "./styles.css";
import { api } from "../../services/api";
import { useState } from "react";

function NotePad() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function createNote() {
    api.post("/notes", { title, description });
  }

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
        <button onClick={createNote}>CRIAR NOTA</button>
      </div>
    </div>
  );
}

export default NotePad;
