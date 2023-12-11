import "./Formulario.css";
import Swal from "sweetalert2";
import { Link, Navigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


function Formulario() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIN] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("¡Ingreso exitoso!");
        setLoggedIN(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("credenciales incorrectas");
      });
  };
  if (loggedIn) {
    return <Navigate to={"/home"} />;
  }

  return (
    <section className="containerForm">
      <div className="containerHeader">
        <GiTakeMyMoney className="gif" />
        <h1>LOGIN ADMIN</h1>
      </div>
      <form className="form">
        <div className="inputs">
          <FaUser className="git" />
          <input
            placeholder="Correo electronico"
            type="text"
            id="usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="inputs">
          <RiLockPasswordFill className="git" />
          <input
            placeholder="Contraseña"
            type="password"
            id="contrasena"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Ingresar
        </button>
        <section className="support">
          <p>Olvidaste tu contraseña?</p>
          <Link to="">Contact support</Link>
        </section>
      </form>
    </section>
  );
}

export default Formulario;
