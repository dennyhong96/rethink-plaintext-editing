import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';

import { ColorModeProvider } from '@context/ColorTheme';

const Renderer = ({ children }) => {
  return <ColorModeProvider>{children}</ColorModeProvider>;
};

Renderer.propTypes = {
  children: PropTypes.node
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Renderer, ...options });

export * from '@testing-library/react';
export { customRender as render };
