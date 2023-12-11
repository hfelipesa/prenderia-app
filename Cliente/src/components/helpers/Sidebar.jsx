import "./Sidebar.css";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";

function Sidebar() {

 
  
  return (
      <div className="containerSidebar">
        <div className="logoHome"><img src={logoImage} alt="" /></div>
      <div className="containerMenu">
        <button >
        <Link to="/home" > <FaHome className="gifs"/>Inicio</Link>
        </button>
        <button>
          <Link to="/home/consulta"> <IoSearch className="gifs"/>Consulta</Link>
        </button>
        <button>
          <Link to="/home/inventario"> <MdOutlineInventory className="gifs" />Inventario</Link>
        </button>
        <button>
          <Link to="/home/contrato"> <FaFileContract className="gifs"/> Contrato</Link>
        </button>
      </div>
      <button  className="btnClosed" >
      <Link to="/">Cerrar sesion</Link>
      </button>

    </div>
    
  );
}

export default Sidebar;
