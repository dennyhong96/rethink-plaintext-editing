import React from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'react-simplemde-editor';

import useFiles from '@hooks/useFiles';
import useIsEditing from '@hooks/useIsEditing';
import useMarkdownPreview from '@hooks/useMarkdownPreview';
import EditorLayout from '@components/EditorLayout';
import css from './style.module.css';

function MarkdownEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { HTMLContent } = useMarkdownPreview({ content });
  const { isEditing, toggleEditing } = useIsEditing();

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={toggleEditing}
      preview={
        <div
          className={css.content}
          dangerouslySetInnerHTML={{ __html: HTMLContent }}
        />
      }
    >
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
    </EditorLayout>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object
};

export default MarkdownEditor;
