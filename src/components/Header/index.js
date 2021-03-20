import React from 'react';

import css from './styles.module.css';

const Header = () => (
  <header className={css.header}>
    <div className={css.tagline}>Rethink Engineering Challenge</div>
    <h1>Fun With Plaintext</h1>
    <div className={css.description}>
      Let{"'"}s explore files in JavaScript. What could be more fun than
      rendering and editing plaintext? Not much, as it turns out.
    </div>
  </header>
);

export default Header;
