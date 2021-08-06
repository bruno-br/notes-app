import "./App.css";
import NotePad from "./components/NotePad";
import NotesCollection from "./components/NotesCollection";
import Separator from "./components/Separator";
import { NotesProvider } from "./contexts/NotesContext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NotesProvider>
          <NotePad />
          <Separator />
          <NotesCollection />
        </NotesProvider>
      </div>
    </div>
  );
}

export default App;
