import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import useFiles from '@hooks/useFiles';
import EditorLayout from '@components/EditorLayout';
import Textarea from '@components/Textarea';
import css from './style.module.css';

function CodeEditor({ file }) {
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
        <div className={css.content}>
          <SyntaxHighlighter language="javascript" style={docco}>
            {content || ''}
          </SyntaxHighlighter>
        </div>
      )}
    </EditorLayout>
  );
}

CodeEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default CodeEditor;
