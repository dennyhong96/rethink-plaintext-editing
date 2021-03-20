import fs from 'fs';
import path from 'path';

const FILE_DIR = '_files';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Get file by name
    if (req.query.name) {
      const fileName = req.query.name;
      const content = await new Promise(resolve => {
        fs.readFile(path.resolve(FILE_DIR, fileName), function(_, data) {
          resolve(data.toString());
        });
      });
      const stats = fs.statSync(path.resolve(FILE_DIR, fileName));
      return res.status(200).json({ content, lastModified: stats.mtime });
    }

    // List all files
    const fileNames = fs.readdirSync(FILE_DIR);
    const files = fileNames.map(fileName => {
      return {
        fileName,
        lastModified: fs.statSync(path.resolve(FILE_DIR, fileName)).mtime
      };
    });
    return res.status(200).json({ files });
  }

  // Write to file
  if (req.method === 'POST') {
    const content = JSON.parse(req.body).content;
    await new Promise(resolve => {
      fs.writeFile(path.resolve(FILE_DIR, 'test.txt'), content, function() {
        resolve();
      });
    });

    res.status(200).json({ content });
  }
}
