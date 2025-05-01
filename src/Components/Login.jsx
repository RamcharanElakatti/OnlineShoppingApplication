import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await axios.post("http://localhost:8080/auth/login", { 
        email, 
        password 
      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/"); 
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(error.response.data); 
      } else {
        setError("Something went wrong. Please try again.");
      }
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4 text-primary">Login</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <p className="text-center mt-3 text-muted" style={{ fontSize: "0.9rem" }}>
          Don't have an account? <Link to="/register" className="text-decoration-none">Register here</Link>
        </p>
      </div>
    </div>
  );
}
