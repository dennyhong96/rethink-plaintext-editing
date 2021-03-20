import React, { useState, useEffect } from 'react';
import path from 'path';
import PropTypes from 'prop-types';

import css from './style.module.css';
import { readFile } from '@lib/api';

function Previewer({ file }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      const content = await readFile({ fileName: file.fileName });
      setContent(content);
    })();
  }, []);

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
