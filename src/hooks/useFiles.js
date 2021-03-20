import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { readFile, writeFile } from '@lib/api';

const debouncedWriteFile = debounce(writeFile, 250);

const useFiles = ({ fileName }) => {
  const [content, setContent] = useState();

  // Fetch file content on editor load
  useEffect(() => {
    (async () => {
      const content = await readFile({ fileName });
      setContent(content);
    })();
  }, []);

  // Write new content to file, as well as sync local state
  const handleWriteFile = async ({ fileName, newContent }) => {
    setContent(newContent);
    await debouncedWriteFile({ newContent, fileName });
  };

  return {
    content,
    handleWriteFile
  };
};

export default useFiles;
