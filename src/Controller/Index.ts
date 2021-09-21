import 'reflect-metadata';
import Container from 'typedi';
import * as Express from 'express';
import HomeController from './HomeController';
import HomeMiddleware from 'src/Middlewares/HomeMiddleware';
import { useExpressServer, useContainer } from 'routing-controllers';

const httpContext = require('express-http-context');
useContainer(Container);
let router = Express.Router();
router.use(httpContext.middleware);

useExpressServer(router, {
    classTransformer: true,
    defaultErrorHandler: false,
    controllers: [ HomeController ],
    middlewares: [ HomeMiddleware ],
});

export default router;