import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import { useColorMode } from '@context/ColorTheme';
import useFiles from '@hooks/useFiles';
import useIsEditing from '@hooks/useIsEditing';
import EditorLayout from '@components/EditorLayout';
import Textarea from '@components/Textarea';

// 'react-json-view' doesn't support SSR
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

function JsonEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { isEditing, toggleEditing } = useIsEditing();
  const { colorMode } = useColorMode();

  const jsonContent = useCallback(
    content => {
      try {
        return JSON.parse(content);
      } catch (error) {
        return {
          error: 'Please make sure your JSON is valid.'
        };
      }
    },
    [content]
  );

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={toggleEditing}
      preview={
        <ReactJson
          theme={colorMode === 'DARK' ? 'chalk' : undefined}
          src={jsonContent(content)}
        />
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
