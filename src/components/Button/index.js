import React from 'react';
import PropTypes from 'prop-types';

import css from './style.module.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className={css.button} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
