import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '@components/Button';
import { buttonMotions, layoutMotions, screenMotions } from './motions';
import css from './style.module.css';

function EditorLayout({
  children,
  file,
  onToggle,
  isEditing,
  preview,
  isUnknownFileType = false
}) {
  return (
    <motion.div className={css.preview} {...layoutMotions}>
      <div className={css.title}>
        <div>
          <span>{path.basename(file.fileName)}</span>{' '}
          <span>{isEditing ? '(Editing)' : '(Previewing)'}</span>
        </div>

        {/* Render a preview button / edit button */}
        {!isUnknownFileType && (
          <AnimatePresence exitBeforeEnter>
            {isEditing ? (
              <Button key={'1'} onClick={onToggle} {...buttonMotions}>
                Preview
              </Button>
            ) : (
              <Button key={'2'} onClick={onToggle} {...buttonMotions}>
                Edit
              </Button>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Render a previewer / editor */}
      <AnimatePresence exitBeforeEnter>
        {isEditing ? (
          <motion.div
            className={css.editorWrapper}
            key={'editor-view'}
            {...screenMotions}
          >
            {children}
          </motion.div>
        ) : (
          <motion.div
            key={'preview-view'}
            className={css.content}
            {...screenMotions}
          >
            {preview}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

EditorLayout.propTypes = {
  children: PropTypes.node,
  preview: PropTypes.node,
  file: PropTypes.object,
  onToggle: PropTypes.func,
  isEditing: PropTypes.bool,
  isUnknownFileType: PropTypes.bool
};

export default EditorLayout;
