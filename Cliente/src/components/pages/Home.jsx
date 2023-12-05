import Sidebar from "../helpers/Sidebar";
import { Outlet } from 'react-router-dom';

Sidebar

function Home() {
  return (
    <div className="home-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
