import "./styles.css";
import Note from "../Note";

function NotePad() {
  let title = "Note 1";
  let desc = "Empresa de pesquisa e inteligência";
  return (
    <div className="notes-collection">
      <h1>Suas notas</h1>
      <Note title={title} description={desc} />
    </div>
  );
}

export default NotePad;
