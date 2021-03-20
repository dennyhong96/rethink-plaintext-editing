import React from 'react';
import PropTypes from 'prop-types';

import useFiles from '@hooks/useFiles';
import css from './style.module.css';

function PlaintextEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });

  return (
    <div className={css.editor}>
      <textarea
        onChange={evt =>
          handleWriteFile({
            newContent: evt.target.value,
            fileName: file.fileName
          })
        }
        value={content}
      />
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
