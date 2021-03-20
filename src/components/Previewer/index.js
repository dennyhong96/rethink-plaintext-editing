import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';

import useFiles from '@hooks/useFiles';
import css from './style.module.css';

function Previewer({ file }) {
  const { content } = useFiles({ fileName: file.fileName });

  return (
    <div className={css.preview}>
      <div className={css.title}>{path.basename(file.fileName)}</div>
      <div className={css.content}>{content}</div>
    </div>
  );
}

Previewer.propTypes = {
  file: PropTypes.object
};

export default Previewer;
