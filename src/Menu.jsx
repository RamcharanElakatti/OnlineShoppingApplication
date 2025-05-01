import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/check")
      .then((res) => {
        setIsLoggedIn(res.data.authenticated);
      })
      .catch((err) => {
        console.error("Failed to check login status:", err);
        setIsLoggedIn(false);
      });
  }, []);

  const handleLogout = () => {
    axios.post("http://localhost:8080/api/auth/logout")
      .then(() => {
        setIsLoggedIn(false);
        alert("Logged out successfully.");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
        alert("Logout failed. Try again.");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
            alt="Logo"
            style={{ width: "40px", height: "40px", objectFit: "contain" }}
          />
          Online Shopping
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
