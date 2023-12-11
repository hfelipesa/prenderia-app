import React from 'react'
import { useState } from 'react';
import { db } from '../../firebase';
import { collection,doc,getDocs,} from 'firebase/firestore';
import "../pages/Inventario.css"

function Inventario() {
   const [products,setProducts]=useState([])
   const productsColletions=collection(db,"producto") 
   
   const productos=async(e)=>{
    e.preventDefault()
     const datos= await getDocs(productsColletions)
     setProducts(
      datos.docs.map((doc)=>({
        ...doc.data(), 
          id:doc.id
      }))
     )
   }
   
  return (
    <div className='containerInventario'>
    <button type="button" onClick={productos}>
      Mostrar
    </button>
    <div className="cardResultadoInventario">
      {products.map((producto, key) => (
        <div key={key} className="">
          <p>Artículo: {producto.articulo}</p>
          <p>Marca: {producto.marca}</p>
          <p>Referencia: {producto.referencia}</p>
          <p>Descripción: {producto.descripcion}</p>
          <p>Estado: {producto.estadoContrato}</p>
          <p>Categoría: {producto.categoria}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Inventario
