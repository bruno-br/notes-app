import "./App.css";
import NotePad from "./components/NotePad";
import NotesCollection from "./components/NotesCollection";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NotePad />
        <NotesCollection />
      </div>
    </div>
  );
}

export default App;
