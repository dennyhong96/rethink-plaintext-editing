import React from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'react-simplemde-editor';

import useFiles from '@hooks/useFiles';
import useIsEditing from '@hooks/useIsEditing';
import useMarkdownPreview from '@hooks/useMarkdownPreview';
import EditorLayout from '@components/EditorLayout';

function MarkdownEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { HTMLContent } = useMarkdownPreview({ content });
  const { isEditing, toggleEditing } = useIsEditing();

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={toggleEditing}
      preview={<div dangerouslySetInnerHTML={{ __html: HTMLContent }} />}
    >
      <SimpleMDE
        className="markdown-editor"
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
