/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import toast from 'react-hot-toast';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const features = [
    {
      title: 'Direct Farm Access',
      description: 'Connect directly with farmers and access fresh produce',
      icon: '🌾'
    },
    {
      title: 'Secure Payments',
      description: 'Safe and secure transaction processing',
      icon: '🔒'
    },
    {
      title: 'Agricultural Loans',
      description: 'Get financial support to grow your farming business',
      icon: '💰'
    }
  ];

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    } else {
      toast.error('Please enter a search term');
    }
  };

  // Handle marketplace button click
  const handleExploreMarketplace = () => {
    navigate('/marketplace');
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`Added ${product.name} to cart!`);
  };

  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <motion.div
          className="container hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <h1 className="hero-title">
              Connecting Farmers with Buyers
            </h1>
            <p className="hero-description">
              Access fresh farm products directly from farmers, secure agricultural loans, 
              and grow your farming business with our innovative fintech solutions.
            </p>
            <form onSubmit={handleSearch} className="search-container">
              <input
                type="text"
                placeholder="Search for agricultural products"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <motion.button
                type="submit"
                className="search-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSearch size={20} />
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants}>
            <img
              src="/images/home/hero-image.svg"
              alt="Farmer in Field"
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="container">
          <motion.div
            className="text-center space-y-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold"
              variants={itemVariants}
            >
              Why Choose AgroPlus?
            </motion.h2>
            <motion.p 
              className="text-text-light max-w-2xl mx-auto"
              variants={itemVariants}
            >
              We provide comprehensive solutions for agricultural needs
            </motion.p>
          </motion.div>

          <motion.div 
            className="cards-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onMouseMove={(e) => {
              const cards = document.querySelectorAll('.card');
              cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
              });
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => {
                  // Navigate based on feature
                  switch (feature.title) {
                    case 'Direct Farm Access':
                      navigate('/marketplace');
                      break;
                    case 'Secure Payments':
                      navigate('/cart');
                      break;
                    case 'Agricultural Loans':
                      navigate('/loans');
                      break;
                    default:
                      break;
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-icon">{feature.icon}</div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <img
                src="https://placehold.co/800x400?text=Agricultural+Marketplace"
                alt="Agricultural Marketplace"
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-3xl font-bold">
                Discover Our Marketplace
              </h2>
              <p className="text-text-light">
                Browse through a wide selection of agricultural products from verified farmers. 
                Our marketplace ensures quality produce and fair prices for both farmers and buyers.
              </p>
              <motion.button
                className="button button-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreMarketplace}
              >
                Explore Marketplace
                <FiArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <motion.div
            className="text-center space-y-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl font-bold"
              variants={itemVariants}
            >
              Featured Products
            </motion.h2>
            <motion.p 
              className="text-text-light max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Explore our selection of high-quality agricultural products
            </motion.p>
          </motion.div>

          <motion.div 
            className="product-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onClick={() => navigate(`/products/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="product-content">
                  <h3 
                    className="product-title"
                    onClick={() => navigate(`/products/${product.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    {product.name}
                  </h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">₦{product.price.toLocaleString()}</span>
                    <motion.button
                      className="add-to-cart-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home; 