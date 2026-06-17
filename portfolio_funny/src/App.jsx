import { useState, useEffect } from 'react';
import './App.css';

import resume from './assets/figma_resume_template.png';
import vscode from './assets/vscode_figma_template.png';

import floopy from './assets/floopy_vaper.gif';
import idea from './assets/background_link_tyler.jpg';

function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  // Trigger the door opening animation shortly after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true);
    }, 600); // 0.6 second delay before they slide open automatically

    return () => clearTimeout(timer);
  }, []);

  // UPDATED: Emojis replaced with image path strings. 
  // You can use regular web URLs (like below) or local paths like "/images/pocky.png"
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



      {/* 2. MAIN KAWAII SHOP WEB PAGE */}
      <div className={`shop-container ${doorsOpen ? 'visible' : ''}`}>
        <header className="shop-header">
          <h1 className="shop-title">Portfolio Mart</h1>
          <p className="shop-subtitle">Welcome to my portfolio convenience shop</p>
        </header>


        {/* making the bottom of the shelf */}
        <div className="shelf-bottom">

        </div>

    

        <main className="product-grid">
          {sampleProducts.map((product) => (
            <div key={product.id} className="product-card">
              <span className="product-badge">{product.badge}</span>
              
              {/* UPDATED: Changed from raw text emoji rendering to an img tag */}
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
      </div>


      {/* making the bottom of the shelf */}
      <div className="shelf-bottom">

      </div>



      {/* <div className="shelf-top">
          
      </div> */}
    </>
  );
}

export default App;