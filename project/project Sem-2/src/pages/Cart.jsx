function Cart({ cartItems }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="page">
      <h1>View Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart Is Empty</h2>
      ) : (
        <>
          <div className="products">
            {cartItems.map((item, index) => (
              <div className="product" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                />

                <p>{item.name}</p>

                <span>₹{item.price}</span>
              </div>
            ))}
          </div>

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;