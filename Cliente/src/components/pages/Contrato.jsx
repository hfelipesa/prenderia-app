import { useState } from "react";
import React from "react";
import { db } from "../../firebase";
import { addDoc, collection,query,getDocs,where,updateDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

function Contrato() {
  const [nombre, setNombre] = useState("");
  const [documento_cliente, setDocumentoCliente] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [articulo, setArticulo] = useState("");
  const [marca, setMarca] = useState("");
  const [referencia, setReferencia] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prestamo, setPrestamo] = useState(0);
  const [interes, setInteres] = useState(0);
  const[fechaIngreso,setfechaIngreso]=useState("date")
  const [plazo, setPlazo] = useState("date");
  const [estadoContrato, setEstadoContrato] = useState("");

  const guardarProducto = async (e) => {
    e.preventDefault();
    if (
      !nombre ||
      !documento_cliente ||
      !telefono ||
      !direccion ||
      !email ||
      !articulo ||
      !marca ||
      !referencia ||
      !categoria ||
      !descripcion ||
      prestamo === 0 ||
      interes === 0 ||
      !plazo ||
      !fechaIngreso ||
      !estadoContrato
    ) {
      alert(
        "Todos los campos son obligatorios. Por favor, completa todos los campos."
      );
      return;
    }
    const clienteQuery = query(
      collection(db, "cliente"),
      where("documento_cliente", "==", documento_cliente)
    ); 
    try {
      const clienteSnapshot = await getDocs(clienteQuery);
      if (!clienteSnapshot.empty) {
        clienteSnapshot.forEach(async (doc) => {
          await updateDoc(doc.ref, {
            telefono: telefono,
            direccion: direccion,
            email: email,
          });
        });
      } else {
        const nuevoCliente = {
          nombre,
          documento_cliente,
          telefono,
          direccion,
          email,
        };
        await addDoc(collection(db, "cliente"), nuevoCliente);
      }
      const nuevoContrato = {
        articulo,
        marca,
        referencia,
        categoria,
        descripcion,
        prestamo,
        interes,
        plazo,
        fechaIngreso,
        estadoContrato,
        documento_cliente,
      };
      await addDoc(collection(db, "producto"), nuevoContrato);
      alert("Contrato creado exitosamente");
    } catch (error) {
      console.error("Error al guardar datos:", error);
      alert("Ocurrió un error al guardar los datos. Por favor, inténtalo de nuevo.");
    }
  }; 
  return (
    <section className="container mt-4">
      <h2>Datos cliente</h2>
      <form onSubmit={guardarProducto}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre Completo
            </label>
            <input
              id="nombreCompleto"
              type="text"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="documento" className="form-label">
              Documento
            </label>
            <input
              id="documento"
              type="text"
              className="form-control"
              onChange={(e) => setDocumentoCliente(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              id="telefono"
              type="text"
              className="form-control"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="direccion" className="form-label">
              Dirección
            </label>
            <input
              id="direccion"
              type="text"
              className="form-control"
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <h2 className="mt-4">Datos producto</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="articulo" className="form-label">
              Artículo
            </label>
            <input
              id="articulo"
              type="text"
              className="form-control"
              onChange={(e) => setArticulo(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="marca" className="form-label">
              Marca
            </label>
            <input
              id="marca"
              type="text"
              className="form-control"
              onChange={(e) => setMarca(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="referencia" className="form-label">
              Referencia
            </label>
            <input
              id="referencia"
              type="text"
              className="form-control"
              onChange={(e) => setReferencia(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="categoria" className="form-label">
              Categoría
            </label>
            <select
              id="categoria"
              className="form-select"
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="" disabled defaultValue>
                Selecciona una categoría
              </option>
              <option value="Categoria1">Categoria 1</option>
              <option value="Categoria2">Categoria 2</option>
            </select>
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción
            </label>
            <textarea
              id="descripcion"
              className="form-control"
              rows="6"
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>
        </div>

        <h2 className="mt-4">Términos y condiciones</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="prestamo" className="form-label">
              Préstamo
            </label>
            <input
              id="prestamo"
              type="number"
              className="form-control"
              onChange={(e) => setPrestamo(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="interes" className="form-label">
              Interés
            </label>
            <input
              id="interes"
              type="number"
              className="form-control"
              onChange={(e) => setInteres(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="plazo" className="form-label">
              Fecha Plazo
            </label>
            <input
              id="plazo"
              type="date"
              className="form-control"
              onChange={(e) => setPlazo(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="fechangreso" className="form-label">
              Fecha Ingreso
            </label>
            <input
              id="FechaIngreso"
              type="date"
              className="form-control"
              onChange={(e) => setfechaIngreso(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
  <label htmlFor="estadoContrato" className="form-label">
    Estado del Contrato
  </label>
  <select
  id="estadoContrato"
  className="form-select"
  onChange={(e) => setEstadoContrato(e.target.value)}
  required
  value={estadoContrato} // Agregar el valor seleccionado
>
  <option value="" disabled defaultValue>
    Seleccione un estado
  </option>
  <option value="activo">Activo</option>
  <option value="vencido">Vencido</option>
</select>
</div>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ backgroundColor: "#000000" }}
        >
          Crear contrato
        </button>
      </form>
    </section>
  );
}
export default Contrato;
