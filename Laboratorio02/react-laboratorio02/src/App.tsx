import './App.css';
import ButtonComponent from "./shared/ButtonComponent";
import CardComponent from "./shared/CardComponent";
import LoaderComponent from "./shared/LoaderComponent";

function App() {
  return (
    <main>
      <div id="contenedor-negro">
        <div id="contenedor-blanco">
          <div className="caja-amarilla">
              <ButtonComponent />
          </div>
          <div className="caja-amarilla">
              <CardComponent />
          </div>
          <div className="caja-amarilla">
              <LoaderComponent />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;