/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FilterSection = ({ title, options, selectedValue, onChange }) => {
  return (
    <div className="filter-section">
      <h3>{title}</h3>
      <div className="filter-options">
        {options.map(option => (
          <motion.button
            key={option.id}
            className={`filter-option ${selectedValue === option.id ? 'active' : ''}`}
            onClick={() => onChange(option.id)}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {option.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FilterSection; 