import { useEffect, useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Smart Watch Series 9",
    category: "Wearables",
    price: 299.99,
    oldPrice: 349.99,
    reviews: 2100,
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 2,
    name: "Wireless Airbuds Pro",
    category: "Audio",
    price: 129.99,
    oldPrice: 159.99,
    reviews: 1600,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    oldPrice: 79.99,
    reviews: 1200,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 4,
    name: "3-in-1 Wireless Charger",
    category: "Accessories",
    price: 49.99,
    oldPrice: 69.99,
    reviews: 980,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 5,
    name: "4K Camera Drone",
    category: "Gadgets",
    price: 499.99,
    oldPrice: 579.99,
    reviews: 1800,
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 6,
    name: "Smartphone Gimbal",
    category: "Accessories",
    price: 89.99,
    oldPrice: 119.99,
    reviews: 760,
    image:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 7,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 199.99,
    oldPrice: 249.99,
    reviews: 3200,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 8,
    name: "Modern Smart Speaker",
    category: "Smart Home",
    price: 79.99,
    oldPrice: 99.99,
    reviews: 1100,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 9,
    name: "Ultra Smartphone",
    category: "Gadgets",
    price: 899.99,
    oldPrice: 999.99,
    reviews: 4100,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 10,
    name: "Mechanical Gaming Keyboard",
    category: "Gadgets",
    price: 119.99,
    oldPrice: 149.99,
    reviews: 1900,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 11,
    name: "Wireless Gaming Mouse",
    category: "Gadgets",
    price: 69.99,
    oldPrice: 89.99,
    reviews: 1400,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=90",
  },
  {
    id: 12,
    name: "Smart Home Camera",
    category: "Smart Home",
    price: 109.99,
    oldPrice: 139.99,
    reviews: 870,
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=900&q=90",
  },
];

const categories = [
  "All",
  "Audio",
  "Smart Home",
  "Wearables",
  "Accessories",
  "Gadgets",
];

const slides = [
  {
    title: "Latest Tech",
    red: "Gadgets",
    text: "Explore cutting-edge gadgets that upgrade your everyday lifestyle.",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Smart",
    red: "Lifestyle",
    text: "Powerful technology designed for your modern everyday life.",
    image:
      "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Future",
    red: "Is Here",
    text: "Discover innovative devices built for the next generation.",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=90",
  },
];

const ideas = [
  {
    title: "Tech Setup Ideas",
    count: "128 Ideas",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Travel Tech Essentials",
    count: "96 Ideas",
    image:
      "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Smart Home Inspiration",
    count: "74 Ideas",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Gaming Gear",
    count: "155 Ideas",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Minimal Desk Setup",
    count: "87 Ideas",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1000&q=90",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [message, setMessage] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2200);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryCorrect =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchCorrect = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryCorrect && searchCorrect;
    });
  }, [activeCategory, search]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const found = currentCart.find(
        (item) => item.id === product.id
      );

      if (found) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    showMessage(`${product.name} savatga qo'shildi`);
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteProduct = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );

    showMessage("Mahsulot savatdan o'chirildi");
  };

  const clearCart = () => {
    setCart([]);
    showMessage("Savat tozalandi");
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const openProducts = () => {
    setMobileMenu(false);

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const checkout = () => {
    if (cart.length === 0) {
      showMessage("Savat bo'sh");
      return;
    }

    alert(
      `BUYURTMA QABUL QILINDI!\n\n` +
        `Mahsulotlar: ${totalItems} dona\n` +
        `Jami summa: $${totalPrice.toFixed(2)}\n\n` +
        `Tez orada siz bilan bog'lanamiz.`
    );

    setCart([]);
    setCartOpen(false);
  };

  const subscribe = (event) => {
    event.preventDefault();

    alert("Siz yangiliklarga muvaffaqiyatli obuna bo'ldingiz!");
    event.target.reset();
  };

  return (
    <div className="app">

      <div className="announcement">
        <span>Free shipping on orders over $100</span>

        <div className="announcement-right">
          <span>US</span>
          <span>UK</span>
          <span>UAE</span>
        </div>
      </div>

      <header className="header">

        <div className="logo-area">
          <div className="logo-symbol">
            TV
          </div>

          <div className="logo-text">
            <strong>
              Tech<span>Verse</span>
            </strong>

            <small>
              Discover. Shop. Upgrade.
            </small>
          </div>
        </div>

        <div className="search">
          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search for tech gadgets, ideas and more"
          />

          <button>
            Search
          </button>
        </div>

        <nav className={mobileMenu ? "nav open" : "nav"}>

          <button className="nav-active">
            Home
          </button>

          <button
            onClick={() => {
              setActiveCategory("All");
              openProducts();
            }}
          >
            Today
          </button>

          <button
            onClick={() => {
              setActiveCategory("Wearables");
              openProducts();
            }}
          >
            Following
          </button>

          <button onClick={openProducts}>
            Shop
          </button>

          <button>
            Account
          </button>

          <button
            className="cart-top"
            onClick={() => setCartOpen(true)}
          >
            Cart

            {totalItems > 0 && (
              <span className="cart-number">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="theme-toggle"
            onClick={() =>
              setDarkMode((current) => !current)
            }
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenu((current) => !current)
          }
        >
          Menu
        </button>
      </header>

      <div className="category-navigation">

        <button
          onClick={() => {
            setActiveCategory("Gadgets");
            openProducts();
          }}
        >
          Gadgets
        </button>

        <button
          onClick={() => {
            setActiveCategory("Smart Home");
            openProducts();
          }}
        >
          Smart Home
        </button>

        <button
          onClick={() => {
            setActiveCategory("Audio");
            openProducts();
          }}
        >
          Audio
        </button>

        <button
          onClick={() => {
            setActiveCategory("Wearables");
            openProducts();
          }}
        >
          Wearables
        </button>

        <button
          onClick={() => {
            setActiveCategory("Accessories");
            openProducts();
          }}
        >
          Accessories
        </button>

        <button
          onClick={() => {
            setActiveCategory("All");
            openProducts();
          }}
        >
          Sale
        </button>
      </div>

      <main>

        <section className="hero">

          <div className="hero-left">

            <span className="hero-label">
              Discover. Shop. Upgrade.
            </span>

            <h1>
              {slides[slide].title}
              <span>{slides[slide].red}</span>
            </h1>

            <p>
              {slides[slide].text}
            </p>

            <div className="hero-actions">

              <button
                className="shop-button"
                onClick={openProducts}
              >
                Shop Now
              </button>

              <button
                className="collection-button"
                onClick={() => {
                  setActiveCategory("All");
                  openProducts();
                }}
              >
                Browse Collection
              </button>

            </div>

            <div className="shipping-info">
              <span>US</span>
              <span>UK</span>
              <span>UAE</span>
              <span>Fast Shipping</span>
            </div>

          </div>

          <div className="hero-right">

            <img
              key={slide}
              src={slides[slide].image}
              alt="Technology"
            />

            <div className="new-arrival">
              <strong>New</strong>
              <span>Arrivals</span>
            </div>

          </div>

          <div className="slider-controls">

            <button
              onClick={() =>
                setSlide(
                  (slide - 1 + slides.length) %
                    slides.length
                )
              }
            >
              Prev
            </button>

            <div className="slider-dots">

              {slides.map((_, index) => (
                <button
                  key={index}
                  className={
                    slide === index
                      ? "slider-dot selected"
                      : "slider-dot"
                  }
                  onClick={() => setSlide(index)}
                />
              ))}

            </div>

            <button
              onClick={() =>
                setSlide(
                  (slide + 1) % slides.length
                )
              }
            >
              Next
            </button>

          </div>

        </section>

        <section className="category-cards">

          <button
            onClick={() => {
              setActiveCategory("Audio");
              openProducts();
            }}
          >
            <div>
              <strong>Audio</strong>
              <small>Premium Sound</small>
            </div>

            <span>→</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory("Smart Home");
              openProducts();
            }}
          >
            <div>
              <strong>Smart Devices</strong>
              <small>Smarter Living</small>
            </div>

            <span>→</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory("Wearables");
              openProducts();
            }}
          >
            <div>
              <strong>Wearables</strong>
              <small>Track. Achieve.</small>
            </div>

            <span>→</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory("Accessories");
              openProducts();
            }}
          >
            <div>
              <strong>Accessories</strong>
              <small>Designed for You</small>
            </div>

            <span>→</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory("All");
              openProducts();
            }}
          >
            <div>
              <strong>Deals</strong>
              <small>Top Deals Today</small>
            </div>

            <span>→</span>
          </button>

        </section>

        <section
          className="products-section"
          id="products"
        >

          <div className="section-heading">

            <div>
              <span>EXPLORE OUR COLLECTION</span>
              <h2>Trending Products</h2>
            </div>

            <button
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
              }}
            >
              View all →
            </button>

          </div>

          <div className="filters">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  activeCategory === item
                    ? "filter active"
                    : "filter"
                }
                onClick={() =>
                  setActiveCategory(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

          <div className="products-grid">

            {filteredProducts.map((product) => (

              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-photo">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <button
                    className="quick-add"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    Add to Cart
                  </button>

                </div>

                <div className="product-details">

                  <small>
                    {product.category}
                  </small>

                  <h3>
                    {product.name}
                  </h3>

                  <div className="rating">
                    <span>
                      ★★★★★
                    </span>

                    <small>
                      {product.reviews.toLocaleString()}
                    </small>
                  </div>

                  <div className="product-bottom">

                    <div className="prices">
                      <strong>
                        ${product.price.toFixed(2)}
                      </strong>

                      <del>
                        ${product.oldPrice.toFixed(2)}
                      </del>
                    </div>

                    <button
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Buy
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <h3>
                Mahsulot topilmadi
              </h3>

              <p>
                Boshqa nom yoki kategoriya
                bilan qidirib ko'ring.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Barchasini ko'rsatish
              </button>
            </div>
          )}

        </section>

        <section className="benefits">

          <div>
            <strong>
              Worldwide Shipping
            </strong>

            <span>
              Fast delivery to US, UK & UAE
            </span>
          </div>

          <div>
            <strong>
              Secure Payments
            </strong>

            <span>
              100% safe & secure checkout
            </span>
          </div>

          <div>
            <strong>
              30-Day Returns
            </strong>

            <span>
              Hassle-free returns guaranteed
            </span>
          </div>

          <div>
            <strong>
              Premium Support
            </strong>

            <span>
              24/7 customer support
            </span>
          </div>

        </section>

        <section className="ideas-section">

          <div className="section-heading">

            <div>
              <span>GET INSPIRED</span>
              <h2>
                Ideas for Your Next Upgrade
              </h2>
            </div>

            <button>
              See more ideas →
            </button>

          </div>

          <div className="ideas-grid">

            {ideas.map((idea) => (
              <article
                className="idea-card"
                key={idea.title}
              >

                <img
                  src={idea.image}
                  alt={idea.title}
                />

                <div className="idea-content">

                  <h3>
                    {idea.title}
                  </h3>

                  <span>
                    {idea.count}
                  </span>

                  <button>
                    →
                  </button>

                </div>

              </article>
            ))}

          </div>

        </section>

        <section className="promo-section">

          <div className="deal">

            <div className="deal-symbol">
              %
            </div>

            <div>

              <small>
                LIMITED TIME OFFER
              </small>

              <h2>
                Exclusive Deals for You!
              </h2>

              <p>
                Save more on top-rated gadgets
                handpicked just for you.
              </p>

              <button
                onClick={openProducts}
              >
                Shop Deals →
              </button>

            </div>

          </div>

          <div className="newsletter">

            <div>

              <small>
                STAY UPDATED
              </small>

              <h2>
                Get the Latest Tech & Deals
              </h2>

              <p>
                Join our newsletter and never
                miss an update.
              </p>

              <form onSubmit={subscribe}>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />

                <button>
                  Subscribe
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      <footer>

        <div className="footer-brand">

          <div className="logo-symbol">
            TV
          </div>

          <strong>
            Tech<span>Verse</span>
          </strong>

          <p>
            Modern technology for modern life.
          </p>

        </div>

        <div>
          <h4>Shop</h4>
          <p>All Products</p>
          <p>Audio</p>
          <p>Wearables</p>
          <p>Accessories</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Contact</p>
          <p>Careers</p>
          <p>Privacy</p>
        </div>

        <div>
          <h4>Customer Care</h4>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Warranty</p>
          <p>Support</p>
        </div>

      </footer>

      <div className="copyright">
        © 2026 TechVerse. All rights reserved.
      </div>

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >

          <aside
            className="cart-panel"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="cart-header">

              <div>
                <small>
                  YOUR BAG
                </small>

                <h2>
                  Shopping Cart
                </h2>
              </div>

              <button
                onClick={() =>
                  setCartOpen(false)
                }
              >
                Close
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <div className="empty-circle">
                  0
                </div>

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add products and they
                  will appear here.
                </p>

                <button
                  onClick={() => {
                    setCartOpen(false);
                    openProducts();
                  }}
                >
                  Start Shopping
                </button>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <small>
                          {item.category}
                        </small>

                        <h3>
                          {item.name}
                        </h3>

                        <strong>
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </strong>

                        <div className="quantity">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item.id
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.id
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                      </div>

                      <button
                        className="remove-product"
                        onClick={() =>
                          deleteProduct(item.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  ))}

                </div>

                <div className="cart-summary">

                  <div>
                    <span>
                      Products
                    </span>

                    <strong>
                      {totalItems}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Shipping
                    </span>

                    <strong>
                      Free
                    </strong>
                  </div>

                  <div className="cart-total">
                    <span>
                      Total
                    </span>

                    <strong>
                      ${totalPrice.toFixed(2)}
                    </strong>
                  </div>

                  <button
                    className="clear-cart"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>

                  <button
                    className="checkout-button"
                    onClick={checkout}
                  >
                    Complete Purchase
                  </button>

                </div>

              </>

            )}

          </aside>

        </div>

      )}

    </div>
  );
}

export default App;