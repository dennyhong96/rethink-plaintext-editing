import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import useFiles from '@hooks/useFiles';
import useIsEditing from '@hooks/useIsEditing';
import EditorLayout from '@components/EditorLayout';
import Textarea from '@components/Textarea';
import css from './style.module.css';

// 'react-json-view' doesn't support SSR
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

function JsonEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { isEditing, toggleEditing } = useIsEditing();

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={toggleEditing}
      preview={
        <div className={css.content}>
          <ReactJson src={JSON.parse(content ?? '{}')} />
        </div>
      }
    >
      <Textarea
        value={content}
        onChange={evt =>
          handleWriteFile({
            newContent: evt.target.value,
            fileName: file.fileName
          })
        }
      />
    </EditorLayout>
  );
}

JsonEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default JsonEditor;
