import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Productcard({ title, price, image, rating, description, addToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/auth/check");

      if (response.data.authenticated) {
        const product = { title, price, image, rating, description };
        addToCart(product);
        alert("Added to cart successfully");
      } else {
        alert("Please login to add items to cart.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      alert("Session expired or server error. Please login again.");
      navigate("/login");
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="row g-0">
        {/* Image Section */}
        <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
          <img
            src={image}
            className="img-fluid"
            alt={title}
            style={{ maxHeight: "200px", objectFit: "contain" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div>
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">₹{price}</h6>
              <p className="card-text mb-1"><strong>Rating:</strong> ⭐ {rating.rate}</p>
              <p className="card-text">{description}</p>
            </div>
            <div className="mt-3">
              <button className="btn btn-primary w-100" onClick={handleAddToCart}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
