import { Service } from "typedi";
import * as express from 'express';
import { ValidationError } from "class-validator";
import { ExpressErrorMiddlewareInterface, HttpError, Middleware } from "routing-controllers";

@Middleware({ type: 'after' })
@Service()
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
    public error(error: any, _req: express.Request, res: express.Response, _next: express.NextFunction) {
        const responseObject = {} as any;
        console.log(error);

        if (Array.isArray(error) && error.every((element) => element instanceof ValidationError)) {
            res.status(400);
            responseObject.message = "Tienes un error en el body. Checkea 'errors' para mas detalles";
            responseObject.errors = error;
        } else {
            if (error instanceof HttpError && error.httpCode) {
                res.status(error.httpCode);
            } else {
                res.status(500);
            }

            if (error instanceof Error) {
                const developmentMode: boolean = process.env.NODE_ENV === 'development';
                if(error.name && (developmentMode || error.message)) responseObject.name = error.name;
                if(error.message) responseObject.message = error.message;
                if(error.stack && developmentMode) responseObject.stack = error.stack
            } else if (typeof error === 'string') responseObject.message = error;
        }
        res.json(responseObject);
    }
}