import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';

import css from './style.module.css';
import Button from '../Button';

function EditorLayout({ children, file, onToggle, isEditing }) {
  return (
    <div className={css.preview}>
      <div className={css.title}>
        <span>{path.basename(file.fileName)}</span>
        <Button onClick={onToggle}>{isEditing ? 'Preview' : 'Edit'}</Button>
      </div>
      <div className={css.content}>{children}</div>
    </div>
  );
}

EditorLayout.propTypes = {
  file: PropTypes.object
};

export default EditorLayout;
