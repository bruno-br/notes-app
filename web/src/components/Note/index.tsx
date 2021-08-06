import "./styles.css";
import img_delete from "../../assets/cancel_36dp.svg";

interface Props {
  title: string;
  description: string;
}

function Note({ title, description }: Props) {
  function cropText(text: string, size: number) {
    if (text.length > size) {
      return text.substring(0, size) + "...";
    }
    return text;
  }

  return (
    <div className="note-container">
      <button className="note-delete">
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
