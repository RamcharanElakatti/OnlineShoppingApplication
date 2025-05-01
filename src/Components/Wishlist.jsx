import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Wishlist() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/check")
      .then((response) => {
        if (!response.data.authenticated) {
          alert("Please login to access your wishlist.");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Auth check failed:", error);
        alert("Session expired or server error. Please login again.");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="container mt-4">
      <h3 className="text-primary">My Wishlist</h3>
      <p>This is your wishlist. Add items you want to buy later!</p>

      {/* Placeholder for actual wishlist items */}
      <div className="alert alert-info">Your wishlist is currently empty.</div>
    </div>
  );
}

export default Wishlist;
