import "./index.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a INDUMENTARIA FS!" />
    </div>
  );
}

export default App;