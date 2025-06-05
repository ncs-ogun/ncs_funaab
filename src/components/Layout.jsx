/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiPhone, FiChevronDown, FiUser, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import PropTypes from 'prop-types';
import MobileNav from './MobileNav';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#2F7A3D',
            },
          },
          error: {
            style: {
              background: '#e74c3c',
            },
          },
        }}
      />
      
      <header className="header">
        <div className="top-banner">
          <div className="container">
            <div className="top-banner-content">
              <div className="top-banner-left">
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiPhone className="text-white" />
                  <span>+2349020250260</span>
                </motion.div>
              </div>

              <div className="top-banner-center">
                <span>Get Agricultural Loans Up to ₦5,000,000</span>
                <span className="text-white/50">|</span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer hover:text-white/90"
                >
                  Apply Now
                </motion.span>
              </div>

              <div className="top-banner-right">
                <motion.div 
                  className="flex items-center gap-2 cursor-pointer hover:text-white/90"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Eng</span>
                  <FiChevronDown />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <nav className="nav-container">
          <div className="container">
            <div className="nav-content-mobile">
              <Link to="/" className="logo">
                <img src="/images/logo.png" alt="AgroPlus Logo" width="32" height="32" />
                <span>AgroPlus</span>
              </Link>
              <MobileNav />
            </div>
            <div className="nav-content">
              <Link to="/" className="logo">
                <img src="/images/logo.png" alt="AgroPlus Logo" width="32" height="32" />
                <span>AgroPlus</span>
              </Link>

              <div className="nav-links">
                {['Products', 'Loans', 'Marketplace', 'About'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={`/${item.toLowerCase()}`}
                      className={`nav-link ${location.pathname === `/${item.toLowerCase()}` ? 'active' : ''}`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="nav-actions">
                {user ? (
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="nav-action-button cursor-pointer"
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                    >
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-medium">
                          {user.name ? user.name[0].toUpperCase() : 'U'}
                        </span>
                      </div>
                      <span className="text-gray-700">{user.name || 'User'}</span>
                      <FiChevronDown className={`transform transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                    </motion.div>

                    {showProfileMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                      >
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        >
                          <FiLogOut />
                          <span>Logout</span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/login" className="nav-action-button">
                      <FiUser />
                      <span>Login</span>
                    </Link>
                  </motion.div>
                )}
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/cart" className="nav-action-button">
                    <div className="cart-icon-container">
                      <FiShoppingCart />
                      {getItemCount() > 0 && (
                        <span className="cart-count">{getItemCount()}</span>
                      )}
                    </div>
                    <span>Cart</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="footer-logo">
                <img src="/images/logo.png" alt="AgroPlus Logo" width="32" height="32" />
                <span>AgroPlus</span>
              </Link>
              <p className="footer-description">
                Connecting farmers with buyers through innovative fintech solutions.
              </p>
            </div>
            
            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                {['Products', 'Loans', 'Marketplace', 'About'].map((item) => (
                  <motion.li key={item}>
                    <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="footer-link"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer-heading">Contact</h3>
              <div className="space-y-4">
                <div className="footer-contact-item">
                  <FiPhone />
                  <a className='pab' href="tel:+2349020250260"><span>+234902050260</span></a>
                </div>
                <div className="footer-contact-item">
                <a className='pab' href="mailto:info@agroplus.com"><span>info@agroplus.com</span></a>
                </div>
                <div className="footer-contact-item">
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="footer-heading">Newsletter</h3>
              <p className="footer-description">Subscribe to our newsletter for updates</p>
              <div className="footer-newsletter">
                <input
                  type="email"
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <motion.button
                  className="newsletter-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout; 