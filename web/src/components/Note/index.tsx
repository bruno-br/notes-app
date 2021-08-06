import "./styles.css";
import img_delete from "../../assets/cancel_36dp.svg";
import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/NotesContext";
interface Props {
  note_id: string;
  title: string;
  description: string;
}

function Note({ note_id, title, description }: Props) {
  const [isExtended, setIsExtended] = useState(false);

  function cropText(text: string, size: number) {
    if (text.length > size) {
      return text.substring(0, size) + "...";
    }
    return text;
  }

  function expandOrCloseNote() {
    setIsExtended(!isExtended);
  }

  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="note-container">
      <button className="note-delete" onClick={() => deleteNote(note_id)}>
        <img src={img_delete} alt="Delete" />
      </button>
      <div className="note">
        <h2 onClick={expandOrCloseNote}>
          {isExtended ? title : cropText(title, 20)}
        </h2>
        <hr />
        <p>{isExtended ? description : cropText(description, 31)}</p>
      </div>
    </div>
  );
}

export default Note;
