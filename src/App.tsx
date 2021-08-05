import Note from "./components/Note";
import "./App.css";

function App() {
  let desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique dignissimos. Nemo reiciendis doloribus incidunt in atque facilis asperiores dolores id quo voluptas iusto eveniet tenetur rerum quod sed adipisci amet, ipsa non eaque possimus molestias, suscipit voluptatibus quisquam animi? Mollitia veritatis totam tempore aut adipisci iste aliquam voluptatem consequatur ut odit dignissimos provident, repellat iure quibusdam voluptates similique incidunt quis, magnam doloremque quaerat autem. Porro, molestias delectus voluptatum corrupti id quos quasi labore recusandae reiciendis beatae perferendis distinctio hic cum optio? Aut adipisci vitae alias hic itaque voluptate, sequi saepe laboriosam iste quisquam! Facilis ratione corrupti iusto culpa alias!";
  return (
    <div className="App">
      <h1>Bloco de notas</h1>
      <Note title="Note 1" description={desc} />
    </div>
  );
}

export default App;
