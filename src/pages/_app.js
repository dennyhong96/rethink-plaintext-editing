import React from 'react';
import PropTypes from 'prop-types';

import { ColorModeProvider } from '@context/ColorTheme';

// Vendor CSS
import 'easymde/dist/easymde.min.css';

// Global theme CSS
import '@theme/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;
