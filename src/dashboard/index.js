import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="app">
      <header className="app-header">
        <img
          className="app-logo"
          alt="Shoprocket - start selling online"
          title="Shoprocket - start selling online"
          src="https://shoprocket.io/assets/img/logo-white.png"
        />

        <Link to="/products" className="app-link">
          Go To Products
        </Link>
      </header>
    </div>
  );
}

export default Dashboard;
