import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { LIGHT_COLOR_THEME, DARK_COLOR_THEME } from '@lib/constants';

export const ColorModeContext = createContext();

const INITIAL_STATE = {
  colorMode: 'LIGHT'
};

const reducer = (state, action) => {
  const { type, payload } = action;

  console.table({ type, payload });

  switch (type) {
    // Initial load && on toggle
    case 'LOCAL_MODE_LOADED':
    case 'MODE_SWITCHED': {
      return {
        ...state,
        colorMode: payload
      };
    }

    default:
      return state;
  }
};

const setCSSProperties = theme => {
  Object.entries(theme).forEach(([propertyName, propertyVal]) => {
    document.documentElement.style.setProperty(propertyName, propertyVal);
  });
};

const toggleColorMode = (dispatch, state) => () => {
  const newMode = state.colorMode === 'DARK' ? 'LIGHT' : 'DARK';
  const newTheme =
    state.colorMode === 'DARK' ? LIGHT_COLOR_THEME : DARK_COLOR_THEME;
  setCSSProperties(newTheme);
  localStorage.setItem('COLOR_MODE', newMode);

  dispatch({
    type: 'MODE_SWITCHED',
    payload: newMode
  });
};

const hydrateLocalColorMode = dispatch => localColorMode => {
  const newTheme =
    localColorMode === 'DARK' ? DARK_COLOR_THEME : LIGHT_COLOR_THEME;
  setCSSProperties(newTheme);

  dispatch({
    type: 'MODE_SWITCHED',
    payload: localColorMode
  });
};

export const ColorModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const localColorMode = localStorage.getItem('COLOR_MODE');
    if (!localColorMode) return;
    hydrateLocalColorMode(dispatch)(localColorMode);
  }, []);

  return (
    <ColorModeContext.Provider
      value={{
        colorMode: state.colorMode,
        toggleColorMode: toggleColorMode(dispatch, state)
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

ColorModeProvider.propTypes = {
  children: PropTypes.node
};

export const useColorMode = () => {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);
  return { colorMode, toggleColorMode };
};
