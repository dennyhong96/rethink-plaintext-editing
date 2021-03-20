import { useState, useEffect } from 'react';

import { listFiles } from '@lib/api';

const useFileList = () => {
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  useEffect(() => {
    (async () => {
      const { files } = await listFiles();
      setFiles(files);
    })();
  }, []);

  return {
    files,
    activeFile,
    setActiveFile
  };
};

export default useFileList;
