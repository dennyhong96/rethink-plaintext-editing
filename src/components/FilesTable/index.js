import path from 'path';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TYPE_TO_ICON } from '@lib/constants';
import getFileExt from '@utils/getFileExt';
import parseDate from '@utils/parseDate';
import css from './styles.module.css';

function FilesTable({ files, activeFile, setActiveFile }) {
  return (
    <div className={css.files}>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, idx) => (
            <tr
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

FilesTable.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  activeFile: PropTypes.object,
  setActiveFile: PropTypes.func
};

export default FilesTable;
