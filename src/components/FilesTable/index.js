import path from 'path';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { TYPE_TO_ICON } from '@lib/constants';
import getFileExt from '@utils/getFileExt';
import parseDate from '@utils/parseDate';
import { containerVariants, itemVariants } from './motions';
import css from './styles.module.css';

function FilesTable({ files, activeFile, setActiveFile }) {
  const tableBodyRef = useRef();

  // Set a transition for smoother hover/active look
  // after framer-motion took care of enter animations
  const onAnimationComplete = () => {
    tableBodyRef.current?.querySelectorAll('tr').forEach(row => {
      row.style.transition = 'all 0.175s ease-in-out';
    });
  };

  return files.length ? (
    <div className={css.files}>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Modified</th>
          </tr>
        </thead>
        <motion.tbody
          ref={tableBodyRef}
          onAnimationComplete={onAnimationComplete}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {files.map((file, idx) => (
            <motion.tr
              variants={itemVariants}
              key={`${file.fileName}-${idx}`}
              className={classNames(css.row, {
                [css.active]:
                  activeFile && activeFile.fileName === file.fileName
              })}
              onClick={setActiveFile.bind(this, file)}
            >
              <td className={css.file}>
                <div
                  className={css.icon}
                  dangerouslySetInnerHTML={{
                    __html: TYPE_TO_ICON[getFileExt(file.fileName)]
                  }}
                ></div>
                {path.basename(file.fileName)}
              </td>

              <td>{parseDate(file.lastModified)}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </div>
  ) : null;
}

FilesTable.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  activeFile: PropTypes.object,
  setActiveFile: PropTypes.func
};

export default FilesTable;
