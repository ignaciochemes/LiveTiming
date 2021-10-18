import Express from 'express';
import Controllers from './src/Controller/Index';
import { getEnvironment } from './src/Configs/Environment';
import { MainFunction } from './src/Utilities/MainFunction';
import * as Chokidar from 'chokidar';

getEnvironment();

let api = Express();
let port = process.env.PORT || 3010;

api.use('/livetiming', Express.json());
api.use(Express.urlencoded({ extended: true }));
api.listen(port, () => {
    console.log('Api response on port', port);
});

api.use('/livetiming', Controllers);

const watcher = Chokidar.watch('./AccServer/results', {
    ignoreInitial: true
});

watcher.on('add', async (path) => {
    await MainFunction();
    console.log(`Se cargo el archivo de la carpeta: ${path}`)
});

export default api;