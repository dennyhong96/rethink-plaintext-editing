import React from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'react-simplemde-editor';

import useFiles from '@hooks/useFiles';
import css from './style.module.css';

function MarkdownEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });

  return (
    <div className={css.editor}>
      <SimpleMDE
        value={content}
        onChange={val =>
          handleWriteFile({
            fileName: file.fileName,
            newContent: val
          })
        }
      />
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
