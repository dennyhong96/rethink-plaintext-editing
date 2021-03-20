import { useEffect, useState } from 'react';

import markdownToHtml from '@utils/markdownToHTML';

const useMarkdownPreview = ({ content }) => {
  const [HTMLContent, setHTMLContent] = useState('');

  useEffect(() => {
    (async () => {
      setHTMLContent(await markdownToHtml(content));
    })();
  }, [content]);

  return {
    HTMLContent
  };
};

export default useMarkdownPreview;
