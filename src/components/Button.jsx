/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false
}) => {
  const baseClass = 'button';
  const variantClass = `button-${variant}`;
  const widthClass = fullWidth ? 'w-full' : '';
  const finalClassName = `${baseClass} ${variantClass} ${widthClass} ${className}`;

  const buttonContent = (
    <>
      {loading ? (
        <motion.div
          className="w-5 h-5 border-2 border-current rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </>
  );

  return (
    <motion.button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.05 } : undefined}
      whileTap={!disabled && !loading ? { scale: 0.95 } : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {buttonContent}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'ghost']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool
};

export default Button; 