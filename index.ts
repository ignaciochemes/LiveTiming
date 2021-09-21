import Express from 'express';
import Controllers from './src/Controller/Index';
import { getEnvironment } from './src/Configs/Environment';

getEnvironment();

let api = Express();
let port = process.env.PORT || 3033;

api.use('/livetiming', Express.json());
api.use(Express.urlencoded({ extended: true }));
api.listen(port, () => {
    console.log('Api response on port', port);
});

api.use('/livetiming', Controllers);

export default api;