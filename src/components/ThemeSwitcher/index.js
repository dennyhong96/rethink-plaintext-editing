import React from 'react';

import { useColorMode } from '@context/ColorTheme';
import css from './styles.module.css';

import IconSun from '../../../public/icon-sun.svg';
import IconMoon from '../../../public/icon-moon.svg';

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button className={css.button} onClick={toggleColorMode}>
      {colorMode === 'LIGHT' ? (
        <span dangerouslySetInnerHTML={{ __html: IconMoon }} />
      ) : (
        <span dangerouslySetInnerHTML={{ __html: IconSun }} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
