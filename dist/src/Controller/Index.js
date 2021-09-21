"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = __importDefault(require("typedi"));
const Express = __importStar(require("express"));
const HomeController_1 = __importDefault(require("./HomeController"));
const ErrorMiddleware_1 = require("../Middlewares/ErrorMiddleware");
const routing_controllers_1 = require("routing-controllers");
const httpContext = require('express-http-context');
(0, routing_controllers_1.useContainer)(typedi_1.default);
let router = Express.Router();
router.use(httpContext.middleware);
(0, routing_controllers_1.useExpressServer)(router, {
    classTransformer: true,
    defaultErrorHandler: false,
    controllers: [HomeController_1.default],
    middlewares: [ErrorMiddleware_1.ErrorMiddleware],
});
exports.default = router;
//# sourceMappingURL=Index.js.map