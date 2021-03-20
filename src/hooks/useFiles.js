import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

import { readFile, writeFile } from '@lib/api';

const useFiles = ({ fileName }) => {
  const [content, setContent] = useState();

  // Debounce to prevent request on every keystroke
  const debouncedWriteFile = useRef(debounce(writeFile, 250));

  // Fetch file content on editor load
  useEffect(() => {
    (async () => {
      const content = await readFile({ fileName });
      setContent(content);
    })();
  }, [fileName]);

  // Write new content to file, and local state
  const handleWriteFile = async ({ fileName, newContent }) => {
    setContent(newContent);
    await debouncedWriteFile.current({ newContent, fileName });
  };

  return {
    content,
    handleWriteFile
  };
};

export default useFiles;
