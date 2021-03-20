import React, { Fragment, useMemo } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

import useFileList from '@hooks/useFileList';
import { REGISTERED_EDITORS } from '@lib/constants';
import getFileExt from '@utils/getFileExt';
import Header from '@components/Header';
import Footer from '@components/Footer';
import FilesTable from '@components/FilesTable';
import Empty from '@components/Empty';
import ThemeSwitcher from '@components/ThemeSwitcher';
import css from './index.module.css';
import EditorLayout from '@components/EditorLayout';

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

          <ThemeSwitcher />

          <FilesTable
            files={files}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />

          <div className={css.spacer}></div>

          <Footer />
        </aside>

        <main className={css.editorWindow}>
          <AnimatePresence exitBeforeEnter>
            {!activeFile && <Empty key={activeFile?.fileName ?? ''} />}
            {activeFile &&
              (Editor ? (
                <Editor key={activeFile?.fileName ?? ''} file={activeFile} />
              ) : (
                <EditorLayout
                  key={activeFile?.fileName ?? ''}
                  file={activeFile}
                  isUnknownFileType
                  preview={'Oops, this file type is not supported yet.'}
                />
              ))}
          </AnimatePresence>
        </main>
      </div>
    </Fragment>
  );
}

export default PlaintextFilesChallenge;

// TODO:
// Tests
// Check if there's not used css classes
// Check un-used imports
// Check prop types
