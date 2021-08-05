import "./styles.css";

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
    <div className="note">
      <h2>{title}</h2>
      <hr />
      <p>{cropText("Empresa de pesquisa e inteligência", 31)}</p>
    </div>
  );
}

export default Note;
