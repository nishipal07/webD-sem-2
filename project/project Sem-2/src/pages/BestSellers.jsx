function BestSellers() {
  return (
    <div className="page">
      <h1>Best Sellers ⭐</h1>

      <div className="products">

        <div className="product">
          <img src="/watermelon-sunscreen.jpg" alt="watermelon-sunscreen" />
          <p>Watermelon Sunscreen</p>
          <span>₹595</span>
        </div>

        <div className="product">
          <img src="/ceramide-moisturizer.jpg" alt="ceramide-moisturizer" />
          <p>Ceramide Moisturizer</p>
          <span>₹549</span>
        </div>

        <div className="product">
          <img src="/Facewash.jpg" alt="Facewash" />
          <p>Hydrating Face Wash</p>
          <span>₹399</span>
        </div>

      </div>
    </div>
  );
}

export default BestSellers;