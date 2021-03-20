import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import css from './style.module.css';

const Button = ({ children, ...rest }) => {
  return (
    <motion.button className={css.button} {...rest}>
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
