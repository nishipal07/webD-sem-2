import { useState } from "react";
function Shop({ cartItems, setCartItems }) {
  const [message, setMessage] = useState("");
  const products = [
    {
      name: "Vitamin C Serum",
      price: 695,
      image: "/vitamin-c-serum.jpg",
    },
    {
      name: "Watermelon Sunscreen",
      price: 595,
      image: "/watermelon-sunscreen.jpg",
    },
    {
      name: "Barrier Repair Cream",
      price: 495,
      image: "/barrierrepair.jpg",
    },
    {
      name: "Hydrating Face Wash",
      price: 399,
      image: "/Facewash.jpg",
    },
    {
      name: "Ceramide Moisturizer",
      price: 549,
      image: "/ceramide-moisturizer.jpg",
    },
  ];

  const addToCart = (product) => {
  setCartItems([...cartItems, product]);

  setMessage(`${product.name} added to cart ✅`);

  setTimeout(() => {
    setMessage("");
  }, 2000);
};

  return (
    <div className="page">
      <h1>Shop Products</h1>

      <h3>Cart Items: {cartItems.length}</h3>
      {message && <div className="popup">{message}</div>}

      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <span>₹{product.price}</span>

            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;