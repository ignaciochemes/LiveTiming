import 'reflect-metadata';
import Container from 'typedi';
import * as Express from 'express';
import HomeController from './HomeController';
import { ErrorMiddleware } from '../Middlewares/ErrorMiddleware';
import { useExpressServer, useContainer } from 'routing-controllers';

const httpContext = require('express-http-context');
useContainer(Container);
let router = Express.Router();
router.use(httpContext.middleware);

useExpressServer(router, {
    classTransformer: true,
    defaultErrorHandler: false,
    controllers: [ HomeController ],
    middlewares: [ ErrorMiddleware ],
});

export default router;