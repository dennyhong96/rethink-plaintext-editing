import React from 'react';
import PropTypes from 'prop-types';

import useIsEditing from '@hooks/useIsEditing';
import useFiles from '@hooks/useFiles';
import EditorLayout from '@components/EditorLayout';
import Textarea from '@components/Textarea';
import css from './style.module.css';

function PlaintextEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { isEditing, toggleEditing } = useIsEditing();

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={toggleEditing}
      preview={content}
    >
      <Textarea
        onChange={evt =>
          handleWriteFile({
            newContent: evt.target.value,
            fileName: file.fileName
          })
        }
        value={content}
      />
    </EditorLayout>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object
};

export default PlaintextEditor;
