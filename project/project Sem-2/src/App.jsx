import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import BestSellers from "./pages/BestSellers";
import SkinCare from "./pages/SkinCare";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
  
    <BrowserRouter>
      <div className="navbar">
        <div className="logo">Dot & Key</div>

        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/bestsellers">Best Sellers</Link>
          <Link to="/skincare">Skin Care</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/cart">View Cart 🛒</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
  path="/shop"
  element={
    <Shop
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  }
/>
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/skincare" element={<SkinCare />} />
        <Route path="/offers" element={<Offers />} />
        <Route
  path="/cart"
  element={<Cart cartItems={cartItems} />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;