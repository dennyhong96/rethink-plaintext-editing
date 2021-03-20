export const writeFile = async ({ content }) => {
  await fetch('/api/files', {
    method: 'POST',
    body: JSON.stringify({ content })
  });
};

export const readFile = async ({ fileName }) => {
  const res = await fetch(`/api/files?name=${fileName}`);
  const { content } = await res.json();
  return content;
};

export const listFiles = async () => {
  const res = await fetch('/api/files');
  const data = await res.json();
  return data;
};
