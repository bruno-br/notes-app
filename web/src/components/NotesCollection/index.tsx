import "./styles.css";
import Note from "../Note";

function NotePad() {
  let title = "Note 1";
  let desc = "Empresa de pesquisa e inteligência";
  return (
    <div className="notes-collection">
      <h1>Suas notas</h1>
      <div className="notes-grid">
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
        <Note title={title} description={desc} />
      </div>
    </div>
  );
}

export default NotePad;
