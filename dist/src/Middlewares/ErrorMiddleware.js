"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const typedi_1 = require("typedi");
const class_validator_1 = require("class-validator");
const routing_controllers_1 = require("routing-controllers");
let ErrorMiddleware = class ErrorMiddleware {
    error(error, _req, res, _next) {
        const responseObject = {};
        console.log(error);
        if (Array.isArray(error) && error.every((element) => element instanceof class_validator_1.ValidationError)) {
            res.status(400);
            responseObject.message = "Tienes un error en el body. Checkea 'errors' para mas detalles";
            responseObject.errors = error;
        }
        else {
            if (error instanceof routing_controllers_1.HttpError && error.httpCode) {
                res.status(error.httpCode);
            }
            else {
                res.status(500);
            }
            if (error instanceof Error) {
                const developmentMode = process.env.NODE_ENV === 'development';
                if (error.name && (developmentMode || error.message))
                    responseObject.name = error.name;
                if (error.message)
                    responseObject.message = error.message;
                if (error.stack && developmentMode)
                    responseObject.stack = error.stack;
            }
            else if (typeof error === 'string')
                responseObject.message = error;
        }
        res.json(responseObject);
    }
};
ErrorMiddleware = __decorate([
    (0, routing_controllers_1.Middleware)({ type: 'after' }),
    (0, typedi_1.Service)()
], ErrorMiddleware);
exports.ErrorMiddleware = ErrorMiddleware;
//# sourceMappingURL=ErrorMiddleware.js.map