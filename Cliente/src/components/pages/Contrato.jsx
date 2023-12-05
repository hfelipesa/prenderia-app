import "./Contrato.css";

function Contrato() {
  return (
    <section className="contrainerForm">
      <div className="forUser">
        <h2>Cliente</h2>
        <form action="">
          <input placeholder="Nombre completo" type="text" className="nombre" />
          <input placeholder="documento" type="number" className="documento" />
          <input placeholder="Telefono" type="number" className="telefono" />
          <input placeholder="Direccion" type="text" className="direccion" />
          <input placeholder="Email" type="email" className="email" />
        </form>
      </div>
      <div className="forProduct"> 
      <h2>Producto</h2>
      <form action="">
          <input placeholder="Articulo"  type="text" className="inputsForm" />
          <input placeholder="Marca" type="text" className="inputsForm" />
          <input placeholder="Referencia" type="text" className="inputsForm" />
          <input placeholder="Categoria" type="text" className="inputsForm" />
          <textarea name="Descripcion" id="" cols="50" rows="7"></textarea>
        </form>
      </div>
      <div className="forTerms">
      <form action="">
        <h2>Terminos</h2>
          <input placeholder="Prestamo" type="text" className="inputsForm" />
          <input placeholder="Interes" type="text" className="inputsForm" />
          <input placeholder="Plazo" type="text" className="inputsForm" />
        </form>
      </div>
      <button>Guardar</button>
    </section>
  );
}
export default Contrato;
