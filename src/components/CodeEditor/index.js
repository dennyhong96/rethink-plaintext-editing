import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { EXT_LANG_MAP } from '@lib/constants';
import getFileExt from '@utils/getFileExt';
import useFiles from '@hooks/useFiles';
import useIsEditing from '@hooks/useIsEditing';
import EditorLayout from '@components/EditorLayout';
import Textarea from '@components/Textarea';
import css from './style.module.css';

const SYNTAX_HIGHLIGHTER_STYLE_OVERRIDE = {
  background: '#fff',
  minHeight: '100%'
};

function CodeEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { isEditing, toggleEditing } = useIsEditing();

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={toggleEditing}
      preview={
        <SyntaxHighlighter
          language={EXT_LANG_MAP[getFileExt(file.fileName)]}
          style={docco}
          customStyle={SYNTAX_HIGHLIGHTER_STYLE_OVERRIDE}
        >
          {content ?? ''}
        </SyntaxHighlighter>
      }
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

CodeEditor.propTypes = {
  file: PropTypes.object
};

export default CodeEditor;
