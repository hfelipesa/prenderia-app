import {createBrowserRouter,RouterProvider,useNavigate} from "react-router-dom"
import rutasNav from "./components/routes/Rutas";

let router=createBrowserRouter(rutasNav)
function App() {
  return <section>
     <RouterProvider router={router}/>
  </section>;
}

export default App;
