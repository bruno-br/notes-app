import "./styles.css";
import img_delete from "../../assets/cancel_36dp.svg";
import { api } from "../../services/api";
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

  async function deleteNote() {
    await api.delete("/notes", { data: { id: note_id } });
  }

  return (
    <div className="note-container">
      <button className="note-delete" onClick={deleteNote}>
        <img src={img_delete} alt="Delete" />
      </button>
      <div className="note">
        <h2>{title}</h2>
        <hr />
        <p>{cropText(description, 31)}</p>
      </div>
    </div>
  );
}

export default Note;
