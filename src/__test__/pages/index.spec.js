import React from 'react';
import { fireEvent, waitFor } from '@testing-library/dom';

import { listFiles } from '@lib/api';
import parseDate from '@utils/parseDate';
import HomePage from '@pages/index';
import { render, screen } from '../test-utils';

const MOCK_FILES = [
  { fileName: 'document.json', lastModified: '2021-03-19T02:47:08.798Z' },
  { fileName: 'fancy.md', lastModified: '2021-03-18T08:13:50.221Z ' }
];

jest.mock('@lib/api');

describe('HomePage', () => {
  beforeEach(() => {
    // Mock a list of files to return from 'listFiles' function
    listFiles.mockReturnValue({ files: MOCK_FILES });
  });

  test('Should render the page heading text', async () => {
    render(<HomePage />);

    await waitFor(() => {
      const pageHeading = screen.getByText(/RETHINK ENGINEERING CHALLENGE/i);
      expect(pageHeading).toBeInTheDocument();
    });
  });

  test('Should display file names correctly', async () => {
    const { findByText } = render(<HomePage />);

    for (const file of MOCK_FILES) {
      expect(await findByText(file.fileName)).toBeInTheDocument();
    }
  });

  test('Should display file last modified dates correctly', async () => {
    const { findByText } = render(<HomePage />);

    for (const file of MOCK_FILES) {
      expect(
        await findByText(parseDate(file.lastModified))
      ).toBeInTheDocument();
    }
  });

  test('Should render editor when clicked on a file', async () => {
    const { findByText, getAllByText } = render(<HomePage />);

    for (const file of MOCK_FILES) {
      const fileEl = await findByText(parseDate(file.lastModified));

      fireEvent.click(fileEl);

      // Wait for fade-in/fade-out animation to to finish,
      // Then test if there are two instances of current active file's name on page
      // One instance should be on the file list table
      // The other instance should be on the editor header
      await waitFor(() => {
        expect(getAllByText(file.fileName)).toHaveLength(2);
      }, 1500);
    }
  });
});
