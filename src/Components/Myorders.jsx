import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ First check if user is logged in via Spring Boot backend
    axios.get("http://localhost:8080/api/auth/check")
      .then((res) => {
        if (res.data.authenticated) {
          // 🔁 If authenticated, fetch orders
          axios.get("http://localhost:8080/api/orders")
            .then((response) => {
              setOrders(response.data);
            })
            .catch((error) => {
              console.error("Failed to fetch orders:", error);
            });
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("Error checking auth:", err);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="container my-4">
      <h3>My Orders</h3>

      {orders.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          You have no orders yet.
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order.id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{order.title}</h5>
                <p className="card-text">
                  <strong>Quantity:</strong> {order.quantity}
                </p>
                <p className="card-text">
                  <strong>Total Price:</strong> ₹{(order.price * order.quantity).toFixed(2)}
                </p>
                <p className="card-text">
                  <strong>Order Date:</strong> {order.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
