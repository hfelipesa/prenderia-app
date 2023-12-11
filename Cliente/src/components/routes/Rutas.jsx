import Consulta from "../pages/Consulta";
import Contrato from "../pages/Contrato";
import Home from "../pages/Home";
import Inventario from "../pages/Inventario";
import Login from "../pages/Login";
import React from "react";

let rutasNav = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "consulta",
        element: <Consulta />,
      },
      {
        path: "contrato",
        element: <Contrato />,
      },
      {
        path: "inventario",
        element: <Inventario />,
      },
    ],
  },
];

export default rutasNav; 
 