import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';

import Button from '@components/Button';
import css from './style.module.css';

function EditorLayout({ children, file, onToggle, isEditing, preview }) {
  return (
    <div className={css.preview}>
      <div className={css.title}>
        <span>{path.basename(file.fileName)}</span>
        <Button onClick={onToggle}>{isEditing ? 'Preview' : 'Edit'}</Button>
      </div>
      {isEditing ? children : <div className={css.content}>{preview}</div>}
    </div>
  );
}

EditorLayout.propTypes = {
  children: PropTypes.node,
  file: PropTypes.object,
  onToggle: PropTypes.func,
  isEditing: PropTypes.bool
};

export default EditorLayout;
