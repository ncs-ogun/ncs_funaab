/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="cart-container">
      <motion.div
        className="cart-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Shopping Cart</h1>
        {items.length > 0 && (
          <button 
            className="clear-cart-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}
      </motion.div>

      {items.length === 0 ? (
        <motion.div 
          className="empty-cart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>Your cart is empty</p>
        </motion.div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="cart-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <div className="item-price">
                    <span className="currency">₦</span>
                    <span className="amount">{item.price.toLocaleString()}</span>
                    {item.unit && <span className="unit">/{item.unit}</span>}
                  </div>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    <FiMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="item-total">
                  <span className="currency">₦</span>
                  <span className="amount">
                    {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>

                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FiTrash2 />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cart-summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <div className="summary-price">
                <span className="currency">₦</span>
                <span className="amount">{getCartTotal().toLocaleString()}</span>
              </div>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <div className="summary-price">
                <span className="currency">₦</span>
                <span className="amount">1,000</span>
              </div>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <div className="total-price">
                <span className="currency">₦</span>
                <span className="amount">
                  {(getCartTotal() + 1000).toLocaleString()}
                </span>
              </div>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart; 