import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [notification, setNotification] = useState('');

  // Xabarnomani chiqarish funksiyasi
  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  // Mahsulotlar ro'yxati (Rasmga mos)
  const products = [
    { id: 1, title: 'Smart Watch Series 9', price: 299.99, likes: '2.1k', category: 'Wearables', emoji: '⌚' },
    { id: 2, title: 'Wireless Earbuds Pro', price: 129.99, likes: '1.6k', category: 'Audio', emoji: '🎧' },
    { id: 3, title: 'Portable Bluetooth Speaker', price: 59.99, likes: '1.2k', category: 'Audio', emoji: '🔊' },
    { id: 4, title: '3-in-1 Wireless Charger', price: 49.99, likes: '980', category: 'Accessories', emoji: '⚡' },
    { id: 5, title: '4K Camera Drone', price: 499.99, likes: '1.8k', category: 'Gadgets', emoji: '🛸' },
    { id: 6, title: 'Smartphone Gimbal', price: 89.99, likes: '760', category: 'Accessories', emoji: '📱' },
  ];

  // Savatchaga qo'shish
  const addToCart = (product) => {
    setCart([...cart, product]);
    showNotification(`"${product.title}" savatchaga qo'shildi!`);
  };

  // Savatchadan o'chirish
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    showNotification("Mahsulot savatchadan olib tashlandi!");
  };

  // Qidiruv va kategoriyalar bo'yicha filter
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-container">
      {/* Xabarnoma (Toast) */}
      {notification && <div className="notification-toast">{notification}</div>}

      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="logo-area" onClick={() => setActiveCategory('All')}>
            <span className="logo-icon">⚡</span>
            <h1 className="logo-text">Tech<span>Verse</span></h1>
          </div>

          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for tech gadgets, ideas and more..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>

          <div className="header-actions">
            <span className="nav-link active" onClick={() => setActiveCategory('All')}>Home</span>
            <span className="nav-link" onClick={() => showNotification("Bugungi maxsus aksiyalar sahifasi")}>Today</span>
            <span className="nav-link" onClick={() => showNotification("Kuzatilayotgan mahsulotlar")} >Following</span>
            <span className="nav-link" onClick={() => showNotification("Do'kon sahifasi")}>Shop</span>
            
            <button className="cart-btn-header" onClick={() => setIsCartOpen(true)}>
              🛒 <span className="cart-badge">{cart.length}</span>
            </button>
          </div>
        </div>

        {/* Kategoriyalar paneli */}
        <nav className="categories-nav">
          <div className="categories-container">
            <div className="category-items">
              <button className={`cat-item ${activeCategory === 'Gadgets' ? 'active' : ''}`} onClick={() => setActiveCategory('Gadgets')}>
                <span className="cat-icon">📱</span> Gadgets
              </button>
              <button className={`cat-item ${activeCategory === 'Smart Home' ? 'active' : ''}`} onClick={() => setActiveCategory('Smart Home')}>
                <span className="cat-icon">🏠</span> Smart Home
              </button>
              <button className={`cat-item ${activeCategory === 'Audio' ? 'active' : ''}`} onClick={() => setActiveCategory('Audio')}>
                <span className="cat-icon">🎧</span> Audio
              </button>
              <button className={`cat-item ${activeCategory === 'Wearables' ? 'active' : ''}`} onClick={() => setActiveCategory('Wearables')}>
                <span className="cat-icon">⌚</span> Wearables
              </button>
              <button className={`cat-item ${activeCategory === 'Accessories' ? 'active' : ''}`} onClick={() => setActiveCategory('Accessories')}>
                <span className="cat-icon">🔌</span> Accessories
              </button>
              <button className={`cat-item ${activeCategory === 'Sale' ? 'active' : ''}`} onClick={() => setActiveCategory('Sale')}>
                <span className="cat-icon">🔥</span> Sale
              </button>
            </div>

            <div className="region-shipping">
              <span className="region-item">🇺🇸 US</span>
              <span className="region-item">🇬🇧 UK</span>
              <span className="region-item">🇦🇪 UAE</span>
              <span className="shipping-badge">⚡ Fast Shipping</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Asosiy qism */}
      <main className="main-content">
        
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="hero-text-content">
            <p className="hero-subtitle">Discover. Shop. Upgrade.</p>
            <h2 className="hero-title">Latest Tech Gadgets</h2>
            <p className="hero-description">Explore cutting-edge gadgets that upgrade your lifestyle.</p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => showNotification("Shop Now bosildi!")}>Shop Now →</button>
              <button className="secondary-btn" onClick={() => showNotification("Kollksiya ochildi!")}>Browse Collection</button>
            </div>
          </div>
          <div className="hero-image-showcase">
            <div className="hero-main-img">🎧</div>
            <div className="hero-sub-images">
              <div className="hero-mini-box">⌚</div>
              <div className="hero-mini-box">📱</div>
            </div>
          </div>
        </section>

        {/* Trending Products */}
        <section className="trending-section">
          <div className="section-header">
            <h2>Trending Products</h2>
            <button className="view-all-btn" onClick={() => setActiveCategory('All')}>View all</button>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-container">
                  <span>{product.emoji}</span>
                </div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-footer">
                  <div className="price-row">
                    <span className="product-price">${product.price}</span>
                    <span className="likes-count">❤️ {product.likes}</span>
                  </div>
                  <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features banner */}
        <section className="features-banner">
          <div className="feature-box">
            <span className="feature-icon">🌍</span>
            <div className="feature-text">
              <h4>Worldwide Shipping</h4>
              <p>Fast delivery to US, UK & UAE</p>
            </div>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🔒</span>
            <div className="feature-text">
              <h4>Secure Payments</h4>
              <p>100% safe & secure checkout</p>
            </div>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🔄</span>
            <div className="feature-text">
              <h4>30-Day Returns</h4>
              <p>Hassle-free returns guaranteed</p>
            </div>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🎧</span>
            <div className="feature-text">
              <h4>Premium Support</h4>
              <p>24/7 customer support</p>
            </div>
          </div>
        </section>

      </main>

      {/* Savatcha Modali */}
      {isCartOpen && (
        <div className="modal-overlay">
          <div className="cart-modal">
            <div className="cart-header">
              <h3>Savatcha ({cart.length})</h3>
              <button className="close-modal-btn" onClick={() => setIsCartOpen(false)}>✕</button>
            </div>
            
            <div className="cart-items-list">
              {cart.length === 0 ? (
                <p className="empty-cart-text">Savatchangiz bo'sh</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="cart-item-row">
                    <div className="cart-item-info">
                      <span className="cart-item-emoji">{item.emoji}</span>
                      <div className="cart-item-details">
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <button className="remove-item-btn" onClick={() => removeFromCart(index)}>O'chirish</button>
                  </div>
                ))
              )}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Jami:</span>
                <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
              </div>
              <button className="checkout-btn" onClick={() => { alert("Buyurtmangiz qabul qilindi!"); setCart([]); setIsCartOpen(false); }}>
                Buyurtma berish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}