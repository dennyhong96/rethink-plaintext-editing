import MarkdownEditor from '@components/MarkdownEditor';
import PlaintextEditor from '@components/PlaintextEditor';
import CodeEditor from '@components/CodeEditor';
import JsonEditor from '@components/JsonEditor';

import IconPlaintextSVG from '../../public/icon-plaintext.svg';
import IconMarkdownSVG from '../../public/icon-markdown.svg';
import IconJavaScriptSVG from '../../public/icon-javascript.svg';
import IconJSONSVG from '../../public/icon-json.svg';
import IconCssSVG from '../../public/icon-css.svg';

// File extension to file icons mapping
export const TYPE_TO_ICON = {
  '.txt': IconPlaintextSVG,
  '.md': IconMarkdownSVG,
  '.js': IconJavaScriptSVG,
  '.css': IconCssSVG,
  '.json': IconJSONSVG
};

// File extension to Editors mapping
export const REGISTERED_EDITORS = {
  '.txt': PlaintextEditor,
  '.md': MarkdownEditor,

  // Code
  '.js': CodeEditor,
  '.css': CodeEditor,
  '.json': JsonEditor
};

// File extension to language mapping, for syntax highligher
export const EXT_LANG_MAP = {
  '.js': 'javascript',
  '.css': 'css'
};

// Dark / Light theme
export const LIGHT_COLOR_THEME = {
  '--color-white': '#ffffff',
  '--color-background': '#f6f8f9',
  '--color-active': '#1f53f1',
  '--color-active-highlight': '#316ed81f',
  '--color-border': '#e6e8eb',
  '--color-text-dark-mute': '#607087',
  '--color-text': '#000',
  '--color-text-dark': '#000a41',
  '--scrollbarBackground': '#f0f2f5',
  '--scrollbarThumb': 'rgba(19, 53, 90, 0.15)'
};

export const DARK_COLOR_THEME = {
  '--color-white': '#222',
  '--color-background': '#333',
  '--color-active': '#1f53f1',
  '--color-active-highlight': '#316ed81f',
  '--color-border': '#444',
  '--color-text-dark-mute': '#ddd',
  '--color-text': '#fff',
  '--color-text-dark': '#fcfcff',
  '--scrollbarBackground': '#2b2b2b',
  '--scrollbarThumb': '#555'
};
