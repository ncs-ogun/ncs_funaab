/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  label,
  error,
  icon,
  className = '',
  required = false,
  disabled = false,
  fullWidth = true
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseClass = 'search-input';
  const widthClass = fullWidth ? 'w-full' : '';
  const errorClass = error ? 'border-red-500' : '';
  const focusClass = isFocused ? 'ring-2 ring-primary ring-opacity-50' : '';
  const finalClassName = `${baseClass} ${widthClass} ${errorClass} ${focusClass} ${className}`;

  return (
    <div className={`${fullWidth ? 'w-full' : ''} space-y-1`}>
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-text-light"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light">
            {icon}
          </div>
        )}

        <motion.input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={finalClassName}
          style={{ paddingLeft: icon ? '2.5rem' : '1rem' }}
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          whileFocus={{ scale: 1.02 }}
        />

        {error && (
          <motion.p
            className="mt-1 text-sm text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool
};

export default Input; 