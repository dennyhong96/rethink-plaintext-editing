import React from 'react';

import { readFile, writeFile } from '@lib/api';
import PlaintextEditor from '@components/PlaintextEditor';
import { render, fireEvent, waitFor } from '../test-utils';

jest.mock('@lib/api');

const MOCK_FILE = { fileName: 'example.txt' };
const MOCK_RETURN_VAL = 'This is an example plain text file.';
const MOCK_NEW_FILE_CONTENT = 'New file content';

describe('PlaintextEditor', () => {
  let file;

  beforeEach(() => {
    file = MOCK_FILE;
    readFile.mockReturnValue(MOCK_RETURN_VAL);
  });

  test('Should render textarea when Edit button is clicked', async () => {
    const { findByText, getByText } = render(<PlaintextEditor file={file} />);

    const editButton = await findByText('Edit');
    fireEvent.click(editButton);

    const textarea = getByText(MOCK_RETURN_VAL);

    expect(textarea).toBeInTheDocument();
  });

  test('Should update textarea value with new content on input', async () => {
    const { findByText, getByText } = render(<PlaintextEditor file={file} />);

    const editButton = await findByText('Edit');
    fireEvent.click(editButton);

    await waitFor(() => {
      const textarea = getByText(MOCK_RETURN_VAL);
      fireEvent.change(textarea, { target: { value: MOCK_NEW_FILE_CONTENT } });

      expect(getByText(MOCK_NEW_FILE_CONTENT)).toBeInTheDocument();
    }, 1000);
  });

  test('Should call write file api with new content after debounced timeout', async () => {
    const { findByText, getByText } = render(<PlaintextEditor file={file} />);

    const editButton = await findByText('Edit');
    fireEvent.click(editButton);

    await waitFor(() => {
      const textarea = getByText(MOCK_RETURN_VAL);
      fireEvent.change(textarea, { target: { value: MOCK_NEW_FILE_CONTENT } });
    }, 1000);

    // A debounce is setup to reduce amount of network requests
    // Wait for the debounce timeout then check if the 'newContent' api function is called
    await waitFor(() => {
      expect(writeFile).toHaveBeenCalledWith({
        newContent: MOCK_NEW_FILE_CONTENT,
        fileName: file.fileName
      });
    }, 300);
  });
});
