import "./Sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
  

  return (
      <div className="containerSidebar">
        <div className="logoHome"><img src="public/images/logo.png" alt="" /></div>
      <div className="containerMenu">
        <button>
          <Link to="/home">Inicio</Link>
        </button>
        <button>
          <Link to="/home/reporte">Reporte</Link>
        </button>
        <button>
          <Link to="/home/consulta">Consulta</Link>
        </button>
        <button>
          <Link to="/home/inventario">Inventario</Link>
        </button>
        <button>
          <Link to="/home/contrato">Contrato</Link>
        </button>
      </div>
      <button className="btnClosed">cerrar sesión</button>
    </div>
    
  );
}

export default Sidebar;
