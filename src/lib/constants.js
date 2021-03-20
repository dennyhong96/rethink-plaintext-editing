import MarkdownEditor from '@components/MarkdownEditor';
import PlaintextEditor from '@components/PlaintextEditor';
import CodeEditor from '@components/CodeEditor';

import IconPlaintextSVG from '../../public/icon-plaintext.svg';
import IconMarkdownSVG from '../../public/icon-markdown.svg';
import IconJavaScriptSVG from '../../public/icon-javascript.svg';
import IconJSONSVG from '../../public/icon-json.svg';

export const TYPE_TO_ICON = {
  txt: IconPlaintextSVG,
  md: IconMarkdownSVG,
  js: IconJavaScriptSVG,
  json: IconJSONSVG
};

export const REGISTERED_EDITORS = {
  txt: PlaintextEditor,
  md: MarkdownEditor,
  js: CodeEditor
};
