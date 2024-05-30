import "./App.css";
import ListaTareas from "./components/ListaTareas";
import ProvedorTareas from "./components/ProvedorTareas";

function App() {
  return (
    <div className="App">
      <ProvedorTareas>
        <ListaTareas />
      </ProvedorTareas>
    </div>
  );
}

export default App;
