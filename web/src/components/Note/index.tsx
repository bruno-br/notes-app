import "./styles.css";
import img_delete from "../../assets/cancel_36dp.svg";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";
interface Props {
  note_id: string;
  title: string;
  description: string;
}

function Note({ note_id, title, description }: Props) {
  function cropText(text: string, size: number) {
    if (text.length > size) {
      return text.substring(0, size) + "...";
    }
    return text;
  }

  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="note-container">
      <button className="note-delete" onClick={() => deleteNote(note_id)}>
        <img src={img_delete} alt="Delete" />
      </button>
      <div className="note">
        <h2>{cropText(title, 20)}</h2>
        <hr />
        <p>{cropText(description, 31)}</p>
      </div>
    </div>
  );
}

export default Note;
