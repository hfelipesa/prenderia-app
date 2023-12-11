import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  where,
  getDocs,
  query,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import "../pages/Consulta.css"


function Consulta() {
  const [documento_cliente, setDocumento] = useState("");
  const [resultadoCliente, setResultadoCliente] = useState("");
  const [resultadoProducto, setResultadoProducto] = useState([]);
  const [plazoPactado, setPlazoPactado] = useState("");

  const handleConsulta = async (e) => {
    e.preventDefault();
    try {
      const clienteQuery = query(
        collection(db, "cliente"),
        where("documento_cliente", "==", documento_cliente)
      );
      const clienteSnapshot = await getDocs(clienteQuery);
      let clienteEncontrado = null;
      clienteSnapshot.forEach((doc) => {
        clienteEncontrado = doc.data();
      });
      if (clienteEncontrado) {
        setResultadoCliente(clienteEncontrado);
      } else {
        setResultadoCliente("Cliente no encontrado");
      }
      const q = query(
        collection(db, "producto"),
        where("documento_cliente", "==", documento_cliente)
      );
      const querySnapshot = await getDocs(q);
      const productosEncontrados = [];
      querySnapshot.forEach((doc) => {
        const producto = {
          id: doc.id,
          ...doc.data(),
        };
        productosEncontrados.push(producto);
      });
      if (productosEncontrados.length > 0) {
        setResultadoProducto(productosEncontrados);
      } else {
        setResultadoProducto(
          "Producto no encontrando por favor verifique documento nuevamente"
        );
      }
    } catch (error) {
      console.error("Error al consultar Firestore:", error);
    }
  };
  const eliminarProducto = async (id) => {
    try {
      if (id) {
        await deleteDoc(doc(db, "producto", id));
        console.log("Producto eliminado correctamente");
      } else {
        console.error("El ID del producto no está definido o es inválido");
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };
  const modificarPlazo = async (id) => {
    try {
      if (id && plazoPactado !== "") {
        await updateDoc(doc(db, "producto", id), { plazo: plazoPactado });
        console.log("Plazo actualizado correctamente");
        const productosActualizados = resultadoProducto.map((producto) =>
          producto.id === id
            ? { ...producto, plazo: plazoPactado }
            : producto
        );
        setResultadoProducto(productosActualizados);
        setPlazoPactado("");
      } else {
        console.error(
          "El ID del producto no está definido o el nuevo plazo está vacío"
        );
      }
    } catch (error) {
      console.error("Error al modificar el plazo:", error);
    }
  };

  return (
    <div className="container" >
      <div className="containerConsulta">
      <form onSubmit={handleConsulta}>
        <input
          type="text"
          placeholder="Consulta documento"
          value={documento_cliente}
          onChange={(e) => setDocumento(e.target.value)}
        />
        <button type="submit">Consultar</button>
      </form>
      </div>
       <section className="cardCliente">
       {resultadoCliente && typeof resultadoCliente === "object" && (
          <div className="cardResultadoCliente">
            <p>Nombre:{resultadoCliente.documento_cliente}</p>
            <p>Documento:{resultadoCliente.documento_cliente}</p>
            <p>Telefono:{resultadoCliente.documento_cliente}</p>
            <p>Email:{resultadoCliente.documento_cliente}</p>
            <p>Direccion:{resultadoCliente.documento_cliente}</p>
          </div>
        )}
       </section>
  <section className="cardProducto">
            {resultadoProducto.map((producto, index) => (
              <div className="cardResultadoProducto" key={index}>
                <div className="">
                  <p>Articulo{producto.articulo}</p>
                  <p>Marca: {producto.marca}</p>
                  <p>Referencia: {producto.referencia}</p>
                  <p>Prestamos: {producto.prestamo}</p>
                  <p>Valor interes: {producto.interes}</p>
                  <p>Plazo pactado: {producto.plazo}
                  <input
                    type="text"
                    placeholder="Nuevo plazo"
                    value={plazoPactado}
                    onChange={(e) => setPlazoPactado(e.target.value)}
                  /></p>
                  <p>Fecha ingreso: {producto.fechaIngreso}</p>
                  <p>Estado: {producto.estadoContrato}</p>
                </div>
                <button
                  onClick={() => eliminarProducto(producto.id)}
                  type="submit"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => modificarPlazo(producto.id)}
                  type="submit"
                >
                  Prorrogar
                </button>
              </div>
            ))}
          </section>
      </div>
  );
}
export default Consulta;
