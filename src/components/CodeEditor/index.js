import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { useColorMode } from '@context/ColorTheme';
import { EXT_LANG_MAP } from '@lib/constants';
import getFileExt from '@utils/getFileExt';
import useFiles from '@hooks/useFiles';
import useIsEditing from '@hooks/useIsEditing';
import EditorLayout from '@components/EditorLayout';
import Textarea from '@components/Textarea';

const SYNTAX_HIGHLIGHTER_STYLE_OVERRIDE = {
  background: 'inherit',
  minHeight: '100%',
  padding: 0
};

function CodeEditor({ file }) {
  const { content, handleWriteFile } = useFiles({ fileName: file.fileName });
  const { isEditing, toggleEditing } = useIsEditing();
  const { colorMode } = useColorMode();

  return (
    <EditorLayout
      file={file}
      isEditing={isEditing}
      onToggle={toggleEditing}
      preview={
        <SyntaxHighlighter
          showLineNumbers
          lineNumberStyle={{ color: '#ddd' }}
          language={EXT_LANG_MAP[getFileExt(file.fileName)]}
          customStyle={SYNTAX_HIGHLIGHTER_STYLE_OVERRIDE}
          style={colorMode === 'DARK' ? a11yDark : docco}
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
