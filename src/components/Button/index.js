import React from 'react';

import css from './style.module.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className={css.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
