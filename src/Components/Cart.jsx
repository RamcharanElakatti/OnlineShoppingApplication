import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cart({ cart, setCart }) {
  const [quantities, setQuantities] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initialQuantities = cart.map((item) => item.quantity || 1);
    setQuantities(initialQuantities);
  }, [cart]);

  const updateQuantity = (index, delta) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max((newQuantities[index] || 1) + delta, 1);
      return newQuantities;
    });
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);

    const newQuantities = [...quantities];
    newQuantities.splice(index, 1);
    setQuantities(newQuantities);
  };

  const totalPrice = cart.reduce(
    (acc, item, index) => acc + item.price * (quantities[index] || 1),
    0
  );

  // ✅ Axios order submission function
  const placeOrder = async (cart, totalPrice) => {
    const itemsWithQuantities = cart.map((item, index) => ({
      ...item,
      quantity: quantities[index] || 1
    }));

    const newOrder = {
      items: itemsWithQuantities,
      totalAmount: totalPrice,
      orderDate: new Date().toISOString()
    };

    try {
      const response = await axios.post("http://localhost:8080/api/orders", newOrder);
      console.log("Order saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  // ✅ Handle placing order and redirection
  const handleProceedToPay = async () => {
    setOrderSuccess(true);
    await placeOrder(cart, totalPrice);
    navigate("/myorders")

    setTimeout(() => {
      setCart([]);
      setOrderSuccess(false);
      navigate("/myorders");
    }, 1000);
  };

  // ✅ Show loading + success message
  if (orderSuccess) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div
          className="spinner-border text-success"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <h2 className="mt-4 text-success">Your Order has been placed successfully!</h2>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm rounded">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Cart</span>
          <div className="d-flex ms-auto">
            <Link to="/myorders" className="btn btn-primary me-2">
              My Orders
            </Link>
            <Link to="/wishlist" className="btn btn-outline-primary">
              Wishlist
            </Link>
          </div>
        </div>
      </nav>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="alert alert-warning text-center mt-5" role="alert">
          <h4 className="alert-heading">Your Cart is Empty!</h4>
          <p>Looks like you haven't added anything yet. Start shopping now!</p>
        </div>
      ) : (
        <>
          <h3>Your Cart</h3>

          {cart.map((product, index) => (
            <div key={index} className="card mb-4 shadow">
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt={product.title}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div>
                      <h5 className="card-title">{product.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        ₹{product.price} x {quantities[index]} = ₹
                        {(product.price * quantities[index]).toFixed(2)}
                      </h6>
                      <p className="card-text mb-1">
                        <strong>Rating:</strong> ⭐ {product.rating?.rate || 4}
                      </p>
                      <p className="card-text">{product.description}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div>
                        <button
                          className="btn btn-sm btn-outline-secondary me-2"
                          onClick={() => updateQuantity(index, -1)}
                        >
                          −
                        </button>
                        <span>{quantities[index]}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary ms-2"
                          onClick={() => updateQuantity(index, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* TOTAL and PAY */}
          <div className="text-end mt-4">
            <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
            <button
              className="btn btn-success btn-lg mt-3"
              onClick={handleProceedToPay}
            >
              Proceed to Pay
            </button>
          </div>
        </>
      )}
    </div>
  );
}
