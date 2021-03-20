import React from 'react';

import EditorLayout from '@components/EditorLayout';
import { render, screen } from '../test-utils';

const MOCK_FILE = { fileName: 'example.txt' };

describe('EditorLayout', () => {
  let children, expectedProps;

  beforeEach(() => {
    children = <div>This is a fake editor</div>;
    expectedProps = {
      file: MOCK_FILE,
      preview: <div>This is a fake preview</div>
    };
  });

  test('Should render preview by default, editor should be hidden', () => {
    render(<EditorLayout {...expectedProps}>{children}</EditorLayout>);

    const preview = screen.getByText('This is a fake preview');
    const editor = screen.queryByText('This is a fake editor');
    expect(preview).toBeInTheDocument();
    expect(editor).toBeNull();
  });

  test('Should render preview when not editing, editor should be hidden', () => {
    expectedProps.isEditing = false;
    render(<EditorLayout {...expectedProps}>{children}</EditorLayout>);

    const preview = screen.getByText('This is a fake preview');
    const editor = screen.queryByText('This is a fake editor');
    expect(preview).toBeInTheDocument();
    expect(editor).toBeNull();
  });

  test('Should render editor when editing, preview should be hidden', () => {
    expectedProps.isEditing = true;
    render(<EditorLayout {...expectedProps}>{children}</EditorLayout>);

    const editor = screen.getByText('This is a fake editor');
    const preview = screen.queryByText('This is a fake preview');
    expect(editor).toBeInTheDocument();
    expect(preview).toBeNull();
  });

  test('Shoule render Edit button by default', () => {
    const { getByText } = render(
      <EditorLayout {...expectedProps}>{children}</EditorLayout>
    );

    const editButton = getByText('Edit');
    expect(editButton).toBeInTheDocument();
  });

  test('Shoule render Edit button when previewing', () => {
    expectedProps.isEditing = false;
    const { getByText } = render(
      <EditorLayout {...expectedProps}>{children}</EditorLayout>
    );

    const editButton = getByText('Edit');
    expect(editButton).toBeInTheDocument();
  });

  test('Shoule render Preview button text when editing', () => {
    expectedProps.isEditing = true;
    const { getByText } = render(
      <EditorLayout {...expectedProps}>{children}</EditorLayout>
    );

    const previewButton = getByText('Preview');
    expect(previewButton).toBeInTheDocument();
  });
});
