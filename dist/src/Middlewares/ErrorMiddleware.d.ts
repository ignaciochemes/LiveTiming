import * as express from 'express';
import { ExpressErrorMiddlewareInterface } from "routing-controllers";
export declare class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
    error(error: any, _req: express.Request, res: express.Response, _next: express.NextFunction): void;
}
