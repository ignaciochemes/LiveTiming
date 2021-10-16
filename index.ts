import Express from 'express';
import Controllers from './src/Controller/Index';
import { getEnvironment } from './src/Configs/Environment';
import cron from 'node-cron';
import { MainFunction } from './src/Utilities/MainFunction';

getEnvironment();

let api = Express();
let port = process.env.PORT || 3010;

api.use('/livetiming', Express.json());
api.use(Express.urlencoded({ extended: true }));
api.listen(port, () => {
    console.log('Api response on port', port);
});

api.use('/livetiming', Controllers);

cron.schedule('*/1 * * * *', () => {
    MainFunction();
});

export default api;