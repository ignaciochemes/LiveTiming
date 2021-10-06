import fs from 'fs';
import path from 'path';

export const getMostRecentFile = async (dir: string) => {
    const files = orderReccentFiles(dir);
    return files.length ? files[0] : undefined;
};
  
const orderReccentFiles = (dir: string) => {
    return fs.readdirSync(dir)
      .filter((file) => fs.lstatSync(path.join(dir, file)).isFile())
      .map((file) => ({ file, mtime: fs.lstatSync(path.join(dir, file)).mtime }))
      .sort((a, b) => a.mtime.getTime() - b.mtime.getTime());
};

export const readJsonReplacer = async (file: any) => {
    let obj = await file.toString();
    obj = await obj.replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
    obj = await obj.replace(/[\u0000-\u0019]+/g, "");
    obj = await JSON.parse(obj);
    return obj;
}