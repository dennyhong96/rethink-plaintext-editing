import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'react-simplemde-editor';

import useFiles from '@hooks/useFiles';
import useMarkdownPreview from '@hooks/useMarkdownPreview';
import EditorLayout from '../EditorLayout';
import css from './style.module.css';

function MarkdownEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { HTMLContent } = useMarkdownPreview({ content });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={() => setIsEditing(prev => !prev)}
    >
      {isEditing ? (
        <SimpleMDE
          events
          value={content}
          onChange={val =>
            handleWriteFile({
              fileName: file.fileName,
              newContent: val
            })
          }
        />
      ) : (
        <div
          className={css.content}
          dangerouslySetInnerHTML={{ __html: HTMLContent }}
        />
      )}
    </EditorLayout>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
