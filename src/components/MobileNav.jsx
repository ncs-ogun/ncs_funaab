/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getItemCount } = useCart();

  const menuVariants = {
    closed: { x: '100%', opacity: 0, transition: { duration: 0.2 } },
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="md:hidden">
      <button className="mobile-menu-button" onClick={() => setIsOpen(true)}>
        <FiMenu size={24} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="mobile-menu-panel"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="mobile-menu-header">
                <Link to="/" className="mobile-menu-logo" onClick={() => setIsOpen(false)}>
                  <img src="/images/logo.png" alt="AgroPlus Logo" width="32" height="32" />
                  <span>AgroPlus</span>
                </Link>
                <button className="mobile-menu-close" onClick={() => setIsOpen(false)}>
                  <FiX size={28} />
                </button>
              </div>
              <nav className="mobile-menu-links">
                {['Products', 'Loans', 'Marketplace', 'About'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="mobile-menu-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="mobile-menu-actions">
                <Link
                  to="/login"
                  className="mobile-menu-action-btn primary"
                  onClick={() => setIsOpen(false)}
                >
                  <FiUser /> Login
                </Link>
                <Link
                  to="/cart"
                  className="mobile-menu-action-btn secondary"
                  onClick={() => setIsOpen(false)}
                >
                  <FiShoppingCart /> Cart{getItemCount() > 0 && (
                    <span className="cart-badge ml-2">{getItemCount()}</span>
                  )}
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav; 