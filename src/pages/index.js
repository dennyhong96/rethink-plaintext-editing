import React, { Fragment, useMemo } from 'react';
import Head from 'next/head';

import useFileList from '@hooks/useFileList';
import { REGISTERED_EDITORS } from '@lib/constants';
import getFileExt from '@utils/getFileExt';
import Previewer from '@components/Previewer';
import Header from '@components/Header';
import Footer from '@components/Footer';
import FilesTable from '@components/FilesTable';
import css from './index.module.css';

function PlaintextFilesChallenge() {
  const { files, activeFile, setActiveFile } = useFileList();

  const Editor = useMemo(
    () =>
      activeFile
        ? REGISTERED_EDITORS[getFileExt(activeFile?.fileName ?? '')]
        : null,
    [activeFile]
  );

  return (
    <Fragment>
      <Head>
        <title>Rethink Engineering Challenge</title>
      </Head>

      <div className={css.page}>
        <aside>
          <Header />

          <FilesTable
            files={files}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />

          <div className={css.spacer}></div>

          <Footer />
        </aside>

        <main className={css.editorWindow}>
          {!activeFile && (
            <div className={css.empty}>Select a file to view or edit</div>
          )}
          {activeFile &&
            (Editor ? (
              <Editor file={activeFile} />
            ) : (
              <Previewer file={activeFile} />
            ))}
        </main>
      </div>
    </Fragment>
  );
}

export default PlaintextFilesChallenge;
