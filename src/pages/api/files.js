import fs from 'fs';
import path from 'path';

const FILE_DIR = '_files';

// Simulate listing, reading, and writing back to files with API route & file system.
export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Return a file by file name
    if (req.query.name) {
      const { name: fileName } = req.query;
      const content = await new Promise(resolve => {
        fs.readFile(path.resolve(FILE_DIR, fileName), function(_, data) {
          resolve(data.toString());
        });
      });
      const stats = fs.statSync(path.resolve(FILE_DIR, fileName));
      return res.status(200).json({ content, lastModified: stats.mtime });
    }

    // Returns all files in _files dir
    const fileNames = fs.readdirSync(FILE_DIR);
    const files = fileNames.map(fileName => {
      return {
        fileName,
        lastModified: fs.statSync(path.resolve(FILE_DIR, fileName)).mtime
      };
    });
    return res.status(200).json({ files });
  }

  // Write back to a file
  if (req.method === 'POST') {
    const { newContent, fileName } = JSON.parse(req.body);
    await new Promise(resolve => {
      fs.writeFile(path.resolve(FILE_DIR, fileName), newContent, resolve);
    });

    return res.status(200).json({ content: newContent, fileName });
  }
}
