import { render } from '@testing-library/react';

const Renderer = ({ children }) => {
  return children;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Renderer, ...options });

export * from '@testing-library/react';

export { customRender as render };
