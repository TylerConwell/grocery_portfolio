import { useState, useEffect } from 'react';
import './App.css';

import resume from './assets/figma_resume_template.png';
import vscode from './assets/vscode_figma_template.png';
import floopy from './assets/floopy_vaper.gif';
import idea from './assets/background_link_tyler.jpg';

function App() {
  
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  
  // NEW: State to hold whichever items the user chooses
  const [cart, setCart] = useState([]);

  // Trigger the door opening animation shortly after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true);
    }, 600); // 0.6 second delay before they slide open automatically

    return () => clearTimeout(timer);
  }, []);

  // UPDATED: Added target links and prices directly into the data structure
  const sampleProducts = [
    { 
      id: 1, 
      name: "My Resume", 
      price: "¥999 (Free for you!)", 
      displayPrice: "¥0",
      badge: "Popular!", 
      image: resume,
      link: "/my-resume.pdf", // Update to your actual local file or drive path
      isDownload: true
    },
    { 
      id: 2, 
      name: "My Skills", 
      price: "¥1,800 (Salary negotiable)", 
      displayPrice: "¥0",
      badge: "New", 
      image: vscode,
      link: "https://yourportfolio.org/skills", // Update to your active link
      isDownload: false
    },
    { 
      id: 3, 
      name: "All My Projects", 
      price: "¥450 (Discounted for you!)", 
      displayPrice: "¥0",
      badge: "Sale", 
      image: idea,
      link: "https://yourportfolio.org/projects", // Update to your active link
      isDownload: false
    },
  ];

  // Handler to add an item if it isn't already in the basket
  const handleAddToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Handler to drop an item out of the receipt list
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

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

      {/* --- CONDITIONAL VIEW SWITCHER --- */}
      {!showReceipt ? (
        
        /* 2. MAIN KAWAII SHOP WEB PAGE */
        <div className={`shop-container ${doorsOpen ? 'visible' : ''}`}>

          {/* TOP RIGHT CHECKOUT BUTTON WITH BASKET COUNT */}
          <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 100 }}>
            <button className="add-to-cart-btn" onClick={() => setShowReceipt(true)}>
              🛒 Checkout ({cart.length})
            </button>
          </div>

          <header className="shop-header">
            <h1 className="shop-title">Portfolio Mart</h1>
            <p className="shop-subtitle">Welcome to my portfolio convenience shop</p>
          </header>

          {/* Top shelf */}
          <div className="shelf">
            <div className="bottle-container"><div className="cap"></div><div className="neck"></div><div className="body"></div></div>
            <div className="bottle-container"><div className="cap"></div><div className="neck"></div><div className="body"></div></div>
            <div className="box-container"><div className="box-lid"></div><div className="box-body"></div></div>
            <div className="can-container"><div className="can_body"></div></div>
            <div className="can-container"><div className="can_body"></div></div>
            <div className="can-container"><div className="can_body"></div></div>
            <div className="ceral-box-container"><div className="ceral-box_body"></div></div>
            <div className="ceral-box-container"><div className="ceral-box_body"></div></div>
            <div className="bottle-container"><div className="cap"></div><div className="neck"></div><div className="body"></div></div>
          </div>

          <main className="product-grid">
            {sampleProducts.map((product) => {
              const isInCart = cart.some(item => item.id === product.id);
              return (
                <div key={product.id} className="product-card">
                  <span className="product-badge">{product.badge}</span>
                  
                  <div className="product-image-box">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-img"
                    />
                  </div>
                  
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <span className="product-price">{product.price}</span>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                      style={{ backgroundColor: isInCart ? 'var(--accent-yellow)' : '' }}
                    >
                      {isInCart ? "In Basket! 🛒" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </main>

          {/* Bottom shelf */}
          <div className="bottom_shelf">
            <div className="can-container"><div className="can_body"></div></div>
            <div className="can-container"><div className="can_body"></div></div>
            <div className="can-container"><div className="can_body"></div></div>
            <div className="box-container"><div className="box-lid"></div><div className="box-body"></div></div>
            <div className="box-container"><div className="box-lid"></div><div className="box-body"></div></div>
            <div className="box-container"><div className="box-lid"></div><div className="box-body"></div></div>
            <div className="bottle-container"><div className="cap"></div><div className="neck"></div><div className="body"></div></div>
            <div className="bottle-container"><div className="cap"></div><div className="neck"></div><div className="body"></div></div>
            <div className="bottle-container"><div className="cap"></div><div className="neck"></div><div className="body"></div></div>
          </div>

        </div>

      ) : (

        /* 3. DYNAMIC FULL-PAGE RECEIPT VIEW */
        <div className="receipt-page-container">
          <div className="receipt-paper">
            <div className="receipt-zigzag-top"></div>
            
            <button className="receipt-back-btn" onClick={() => setShowReceipt(false)}>
              ← Return to Aisles
            </button>
            
            <div className="receipt-contents">
              <header className="receipt-header-info">
                <h2>PORTFOLIO MART, INC.</h2>
                <p>STORE #2026 - SAN MARCOS, TX</p>
                <p>{new Date().toLocaleString()}</p>
                <div className="receipt-line-divider">================================</div>
              </header>

              <main className="receipt-items-area">
                <h3 className="receipt-section-title">CUSTOMER ORDER REVIEW</h3>
                
                {cart.length === 0 ? (
                  <p style={{ textAlign: 'center', padding: '20px 0', fontStyle: 'italic', color: '#666' }}>
                    Your basket is empty! Go back and add items.
                  </p>
                ) : (
                  /* Maps over exactly what the user picked */
                  cart.map((item) => (
                    <div key={item.id} className="receipt-item-row">
                      <div className="receipt-item-details">
                        <span className="receipt-item-name">✨ {item.name.toUpperCase()}</span>
                        <span className="receipt-item-price">{item.displayPrice}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          download={item.isDownload}
                          className="receipt-action-link"
                        >
                          {item.isDownload ? "📄 View/Download PDF" : "🔗 Open Website"}
                        </a>
                        <button 
                          onClick={() => handleRemoveFromCart(item.id)}
                          style={{ background: 'none', border: 'none', color: '#bd3a3a', cursor: 'pointer', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '0.8rem' }}
                        >
                          [Remove]
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </main>

              <footer className="receipt-footer-area">
                <div className="receipt-line-divider">--------------------------------</div>
                <div className="receipt-total-row">
                  <span>TOTAL ITEMS</span>
                  <span>{cart.length}</span>
                </div>
                <div className="receipt-total-row bold-total">
                  <span>TOTAL DUE</span>
                  <span>¥0</span>
                </div>
                <div className="receipt-line-divider">================================</div>
                
                <div className="receipt-barcode">
                  |||||| | ||||| || |||| ||| ||| | ||| | ||
                  <span className="barcode-number">TYLER-2026-CS</span>
                </div>
                
                <p className="receipt-thankyou">THANK YOU FOR SHOPPING WITH US!</p>
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;