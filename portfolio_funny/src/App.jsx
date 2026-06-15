import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  // Trigger the door opening animation shortly after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true);
    }, 600); // 0.6 second delay before they slide open automatically

    return () => clearTimeout(timer);
  }, []);

  const sampleProducts = [
    { id: 1, name: "Matcha Pocky Box", price: "¥350", badge: "Popular!", emoji: "🍵" },
    { id: 2, name: "Strawberry Milk Plush", price: "¥1,800", badge: "New", emoji: "🍓" },
    { id: 3, name: "Shiba Inu Sticker Pack", price: "¥450", badge: "Sale", emoji: "🐕" },
  ];

  return (
    <>
      {/* 1. SLIDING AUTOMATIC DOORS OVERLAY */}
      <div className={`door-entrance-overlay ${doorsOpen ? 'open' : ''}`}>
        <div className="door-sensor"></div>
        
        {/* Left Door */}
        <div className="door-panel door-left">
          <div className="door-glass-line">
            <span className="door-arrow">↑</span>
          </div>
        </div>
        
        {/* Right Door */}
        <div className="door-panel door-right">
          <div className="door-glass-line">
            <span className="door-arrow">↑</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN KAWAII SHOP WEB PAGE */}
      <div className={`shop-container ${doorsOpen ? 'visible' : ''}`}>
        <header className="shop-header">
          <h1 className="shop-title">KAWAII POP!</h1>
          <p className="shop-subtitle">Welcome to your cute Japanese convenience shop ✨</p>
        </header>

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
    </>
  );
}

export default App;