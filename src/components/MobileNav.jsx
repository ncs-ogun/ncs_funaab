/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiLogOut } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const menuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.3
    }
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.3
    }
  }
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getItemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="mobile-nav">
      <button className="mobile-menu-button" onClick={() => setIsOpen(true)}>
        <FiMenu size={28} />
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

              {user && (
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-medium text-lg">
                        {user.name ? user.name[0].toUpperCase() : 'U'}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{user.name || 'User'}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </div>
              )}

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
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="mobile-menu-action-btn primary flex items-center justify-center gap-2"
                  >
                    <FiLogOut /> Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="mobile-menu-action-btn primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUser /> Login
                  </Link>
                )}
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