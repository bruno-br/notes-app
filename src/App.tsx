import Note from "./components/Note";
import "./App.css";

function App() {
  let desc = "Empresa de pesquisa e inteligência";
  return (
    <div className="App">
      <h1>Bloco de notas</h1>
      <Note title="Note 1" description={desc} />
    </div>
  );
}

export default App;
