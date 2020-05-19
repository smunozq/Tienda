import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VendedorComponent from "./components/vendedor";
import ProductoComponent from "./components/producto";

function App() {
  return (
    <div className="container" id="contenedor_padre">
      <div className="App container-fluid">
        <VendedorComponent
          name="Carlos David"
          lastname="Perez"
          age={20}
          document={3928383}
          place_residence="Medellín"
        />
        <ProductoComponent
          reference="Atún"
          code={1013}
          price={3000}
          importe={true}
        />
      </div>
    </div>
  );
}

export default App;
