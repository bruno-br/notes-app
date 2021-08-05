import "./App.css";
import NotePad from "./components/NotePad";
import NotesCollection from "./components/NotesCollection";
import Separator from "./components/Separator";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NotePad />
        <Separator />
        <NotesCollection />
      </div>
    </div>
  );
}

export default App;
