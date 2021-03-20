import React from 'react';

import css from './style.module.css';

const Textarea = ({ ...props }) => {
  return <textarea className={css.textarea} {...props} />;
};

export default Textarea;
