/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  initial = { scale: 0.95, opacity: 0 },
  animate = { scale: 1, opacity: 1 },
  transition = { type: 'spring', stiffness: 100 },
  whileHover = { y: -10, scale: 1.02 }
}) => {
  return (
    <motion.div
      className={`card ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={hover ? whileHover : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  onClick: PropTypes.func,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
  whileHover: PropTypes.object
};

export default Card; 