import { useState, useEffect } from 'react';
import './App.css';

import resume from './assets/figma_resume_template.png';
import vscode from './assets/vscode_figma_template.png';
import floopy from './assets/floopy_vaper.gif';
import idea from './assets/background_link_tyler.jpg';

function App() {
  
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Kept in case you use it later
  const [showReceipt, setShowReceipt] = useState(false);

  // Trigger the door opening animation shortly after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true);
    }, 600); // 0.6 second delay before they slide open automatically

    return () => clearTimeout(timer);
  }, []);

  const sampleProducts = [
    { 
      id: 1, 
      name: "My Resume", 
      price: "¥999 (Free for you!)", 
      badge: "Popular!", 
      image: resume 
    },
    { 
      id: 2, 
      name: "My Skills", 
      price: "¥1,800 (Salery is negotiable)", 
      badge: "New", 
      image: vscode 
    },
    { 
      id: 3, 
      name: "All My Projects", 
      price: "¥450 (Discounted for you!)", 
      badge: "Sale", 
      image: idea 
    },
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

      {/* --- CONDITIONAL VIEW SWITCHER --- */}
      {!showReceipt ? (
        
        /* 2. MAIN KAWAII SHOP WEB PAGE */
        <div className={`shop-container ${doorsOpen ? 'visible' : ''}`}>

          {/* TOP RIGHT CHECKOUT BUTTON */}
          <div style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 100 }}>
            <button className="add-to-cart-btn" onClick={() => setShowReceipt(true)}>
              🛒  Checkout
            </button>
          </div>

          <header className="shop-header">
            <h1 className="shop-title">Portfolio Mart</h1>
            <p className="shop-subtitle">Welcome to my portfolio convenience shop</p>
          </header>

          {/* making the bottom of the shelf */}
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
            {sampleProducts.map((product) => (
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
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </main>

          {/* making the bottom of the shelf */}
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

        /* 3. FULL-PAGE RECEIPT VIEW */
        <div className="receipt-page-container">
          <div className="receipt-paper">
            
            {/* Back to Shop Button */}
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
                
                <div className="receipt-item-row">
                  <div className="receipt-item-details">
                    <span className="receipt-item-name">✨ MY RESUME</span>
                    <span className="receipt-item-price">¥0</span>
                  </div>
                  <a href="/my-resume.pdf" download className="receipt-action-link">
                    📄 View/Download PDF
                  </a>
                </div>

                <div className="receipt-item-row">
                  <div className="receipt-item-details">
                    <span className="receipt-item-name">✨ MY SKILLS</span>
                    <span className="receipt-item-price">¥0</span>
                  </div>
                  <a href="https://yourportfolio.org/skills" target="_blank" rel="noreferrer" className="receipt-action-link">
                    🔗 Open Skills Website
                  </a>
                </div>

                <div className="receipt-item-row">
                  <div className="receipt-item-details">
                    <span className="receipt-item-name">✨ ALL MY PROJECTS</span>
                    <span className="receipt-item-price">¥0</span>
                  </div>
                  <a href="https://yourportfolio.org/projects" target="_blank" rel="noreferrer" className="receipt-action-link">
                    🔗 Open Projects Website
                  </a>
                </div>
              </main>

              <footer className="receipt-footer-area">
                <div className="receipt-line-divider">--------------------------------</div>
                <div className="receipt-total-row">
                  <span>SUBTOTAL</span>
                  <span>¥0</span>
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