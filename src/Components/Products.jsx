import { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "./Productcart";

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  if (products.length === 0) {
    return (
      <div className="alert alert-warning text-center mt-4" role="alert">
        <h4 className="alert-heading">Oops! 😕</h4>
        <p>No products are available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      {products.map((item) => (
        <Productcard key={item.id} {...item} addToCart={addToCart} />
      ))}
    </div>
  );
}
