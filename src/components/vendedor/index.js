import React from "react";
import PropType from "prop-types";

function vendedorComponent(props) {
  return (
    <section className="card">
      <h5 className="card-header">Vendedor</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 col-6">Nombre: {props.name}</div>
          <div className="col-lg-6 col-6">Apellido: {props.lastname}</div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-6">Edad: {props.age}</div>
          <div className="col-lg-6 col-6">Documento: {props.document}</div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-6">
            Lugar de Residencia: {props.place_residence}
          </div>
        </div>
      </div>
    </section>
  );
}

vendedorComponent.propTypes = {
  name: PropType.string.isRequired,
  lastname: PropType.string.isRequired,
  age: PropType.number.isRequired,
  document: PropType.number.isRequired,
  place_residence: PropType.string.isRequired,
};

export default vendedorComponent;
