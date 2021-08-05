import "./styles.css";

function NotePad() {
  return (
    <div className="notepad">
      <h1>Bloco de notas</h1>
      <input type="text" defaultValue="Assunto" />
      <textarea>Texto</textarea>
      <div className="btn-container">
        <button>CRIAR NOTA</button>
      </div>
    </div>
  );
}

export default NotePad;