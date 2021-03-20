import React from 'react';

import css from './styles.module.css';

const COMPANY_CAREERS_LINK = 'https://v3.rethink.software/jobs';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.link}>
        <a href={COMPANY_CAREERS_LINK}>Rethink Software</a>
        &nbsp;—&nbsp;Frontend Engineering Challenge
      </div>
      <div className={css.link}>
        Questions? Feedback? Email us at jobs@rethink.software
      </div>
    </footer>
  );
};

export default Footer;
