import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Menu from "./Menu"
import Register from "./Components/Register"
import { useState } from "react"
import Myorders from "./Components/Myorders";
import Wishlist from "./Components/Wishlist"


function App() {
  const [cart,setcart]=useState([]);

  const addToCart =(product)=>{
    setcart((prevCart)=>[...prevCart,product]);
  }


  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="product" element={<Products addToCart={addToCart}/>}/>
      <Route path="cart" element={<Cart  cart={cart}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/myorders" element={<Myorders/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
