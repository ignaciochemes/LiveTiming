import Express from 'express';
import Controllers from './src/Controller/Index';
import { getEnvironment } from './src/Configs/Environment';
import { postJsonCron } from './src/WebServices/JsonWebServices';
import { getMostRecentFile } from './src/Utilities/UtilityFunctions';
import path from 'path';
import cron from 'node-cron';

getEnvironment();

let api = Express();
let port = process.env.PORT || 3010;

api.use('/livetiming', Express.json());
api.use(Express.urlencoded({ extended: true }));
api.listen(port, () => {
    console.log('Api response on port', port);
});

api.use('/livetiming', Controllers);

async function main() {
    let folder = await path.join(__dirname, './Practice Server Endurance/results/');
    let file = getMostRecentFile(folder);
    postJsonCron(file);
}

cron.schedule('*/2 * * * *', () => {
    main();
});

export default api;