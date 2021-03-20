import React from 'react';
import PropTypes from 'prop-types';

// Vendor CSS
import 'easymde/dist/easymde.min.css';

// Global CSS
import './style.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;
