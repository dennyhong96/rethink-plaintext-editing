import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useFiles from '@hooks/useFiles';
import EditorLayout from '@components/EditorLayout';
import Textarea from '@components/Textarea';
import css from './style.module.css';

function PlaintextEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={() => setIsEditing(prev => !prev)}
    >
      {isEditing ? (
        <Textarea
          onChange={evt =>
            handleWriteFile({
              newContent: evt.target.value,
              fileName: file.fileName
            })
          }
          value={content}
        />
      ) : (
        <div className={css.content}>{content}</div>
      )}
    </EditorLayout>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
