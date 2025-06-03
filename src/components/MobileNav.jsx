/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="mobile-menu-button" onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-menu-header">
              <Link to="/" className="mobile-logo" onClick={() => setIsOpen(false)}>
                <img src="/images/logo.png" alt="AgroPlus Logo" width="24" height="24" />
                <span>AgroPlus</span>
              </Link>
            </div>

            <nav className="mobile-nav-links">
              <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
              <Link to="/loans" onClick={() => setIsOpen(false)}>Loans</Link>
              <Link to="/marketplace" onClick={() => setIsOpen(false)}>Marketplace</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </nav>

            <div className="mobile-nav-actions">
              <Link to="/cart" className="mobile-action-button" onClick={() => setIsOpen(false)}>
                <FiShoppingCart />
                <span>Cart</span>
              </Link>
              <Link to="/login" className="mobile-action-button" onClick={() => setIsOpen(false)}>
                <FiUser />
                <span>Login</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          className="mobile-menu-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default MobileNav; 