import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import 'easymde/dist/easymde.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;
