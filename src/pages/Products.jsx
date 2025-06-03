/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiShoppingCart, FiHeart, FiX } from 'react-icons/fi';
import { categories, products, getProductsByCategory, searchProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  const { addToCart } = useCart();

  useEffect(() => {
    let result = selectedCategory === 'all' ? products : getProductsByCategory(selectedCategory);
    
    if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, priceRange]);

  const handleAddToCart = (product) => {
    addToCart(product);
    // You can add a toast notification here
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle"
          >
            Discover Quality Agricultural Products
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="marketplace-container">
        {/* Search and Filter Header */}
        <div className="marketplace-header">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <button 
            className="filter-toggle-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter />
            <span>Filters</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="marketplace-content">
          {/* Filters Sidebar */}
          <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
            <div className="filters-header">
              <h2>Filters</h2>
              <button 
                className="close-filters-btn"
                onClick={() => setShowFilters(false)}
              >
                <FiX />
              </button>
            </div>

            {/* Categories Filter */}
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="filter-options">
                <button
                  className={`filter-option ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  🏷️ All Products
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-option ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range-inputs">
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                  className="price-range-slider"
                />
                <div className="price-inputs">
                  <span>₦0</span>
                  <span>₦{priceRange.max.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-section">
            <div className="products-header">
              <h2>{categories.find(c => c.id === selectedCategory)?.name || 'All Products'}</h2>
              <p>{filteredProducts.length} products found</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <p>No products found matching your criteria</p>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    className="product-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="product-image-container">
                      <img src={product.image} alt={product.name} className="product-image" />
                      {product.badge && (
                        <span className={`product-badge ${product.badge.toLowerCase()}`}>
                          {product.badge}
                        </span>
                      )}
                      <button className="favorite-button">
                        <FiHeart />
                      </button>
                    </div>

                    <div className="product-content">
                      <div className="product-header">
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-category">
                          {categories.find(c => c.id === product.category)?.name}
                        </p>
                      </div>

                      <div className="product-details">
                        {product.features.map((feature, index) => (
                          <div key={index} className="product-feature">
                            <span className="feature-icon">{feature.icon}</span>
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <div className="product-footer">
                        <div className="product-price">
                          <span className="currency">₦</span>
                          <span className="amount">{product.price.toLocaleString()}</span>
                          <span className="unit">/{product.unit}</span>
                        </div>
                        <button 
                          className="add-to-cart-btn"
                          onClick={() => handleAddToCart(product)}
                        >
                          <FiShoppingCart />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 