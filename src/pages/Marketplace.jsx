/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { fetchProducts, searchProducts, filterByCategory, filterByPrice } from '../api/products';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'grains', name: 'Grains & Cereals' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'livestock', name: 'Livestock' },
  { id: 'poultry', name: 'Poultry' },
  { id: 'equipment', name: 'Farm Equipment' }
];

const priceRanges = [
  { id: 'all', name: 'All Prices' },
  { id: 'under-5000', name: 'Under ₦5,000' },
  { id: '5000-10000', name: '₦5,000 - ₦10,000' },
  { id: '10000-50000', name: '₦10,000 - ₦50,000' },
  { id: 'over-50000', name: 'Over ₦50,000' }
];

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = filterByCategory(selectedCategory);
    }

    // Apply price filter
    if (selectedPriceRange !== 'all') {
      result = filterByPrice(selectedPriceRange);
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedPriceRange, searchQuery, products]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="marketplace-container">
      {/* Header Section */}
      <motion.div 
        className="marketplace-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
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
        
        <motion.button 
          className="filter-toggle-btn"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiFilter />
          <span>Filter</span>
        </motion.button>
      </motion.div>

      <div className="marketplace-content">
        {/* Filters Sidebar */}
        <AnimatePresence>
          <motion.aside 
            className={`filters-sidebar ${isFilterOpen ? 'open' : ''}`}
            initial={{ x: -300 }}
            animate={{ x: isFilterOpen ? 0 : -300 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="filters-header">
              <h2>Filters</h2>
              <motion.button 
                className="close-filters-btn"
                onClick={() => setIsFilterOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </motion.button>
            </div>

            <div className="filter-section">
              <h3>Categories</h3>
              <div className="filter-options">
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    className={`filter-option ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="filter-options">
                {priceRanges.map(range => (
                  <motion.button
                    key={range.id}
                    className={`filter-option ${selectedPriceRange === range.id ? 'active' : ''}`}
                    onClick={() => setSelectedPriceRange(range.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {range.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.aside>
        </AnimatePresence>

        {/* Products Grid */}
        <div className="products-section">
          <motion.div 
            className="products-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>
              {filteredProducts.length} 
              {filteredProducts.length === 1 ? ' Product' : ' Products'} Found
            </h2>
          </motion.div>

          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            <motion.div 
              className="products-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProducts.map(product => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <motion.div 
              className="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>No products found matching your criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace; 