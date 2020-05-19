import React from "react";
import PropType from "prop-types";

function productoComponent({ reference, code, price, importe }) {
  return (
    <section className="card">
      <h5 className="card-header">Producto</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 col-6">Referencia: {reference}</div>
          <div className="col-lg-6 col-6">Código: {code}</div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-6">Precio: {price}</div>
          <div className="col-lg-6 col-6">
            importado: {importe ? "Si" : "No"}
          </div>
        </div>
      </div>
    </section>
  );
}

productoComponent.propTypes = {
  reference: PropType.string.isRequired,
  code: PropType.number.isRequired,
  price: PropType.number.isRequired,
  importe: PropType.bool.isRequired,
};

export default productoComponent;
