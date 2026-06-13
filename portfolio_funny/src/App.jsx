import './App.css';

function App() {
  // A tiny array of mock products to test your styling
  const sampleProducts = [
    { id: 1, name: "Matcha Pocky Box", price: "¥350", emoji: "🍵", badge: "Popular!" },
    { id: 2, name: "Strawberry Milk Plush", price: "¥1,800", emoji: "🍓", badge: "New" },
    { id: 3, name: "Shiba Inu Sticker Pack", price: "¥450", emoji: "🐕", badge: "Sale" },
  ];

  return (
    <div className="shop-container">
      {/* Header section */}
      <header className="shop-header">
        <h1 className="shop-title">KAWAII POP!</h1>
        <p className="shop-subtitle">Welcome to your cute Japanese convenience shop ✨</p>
      </header>

      {/* Main product display grid */}
      <main className="product-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <span className="product-badge">{product.badge}</span>
            
            <div className="product-image-box">
              {product.emoji}
            </div>
            
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <span className="product-price">{product.price}</span>
              <button className="add-to-cart-btn">Add to Cart 🛒</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;