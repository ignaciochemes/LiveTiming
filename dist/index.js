"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Index_1 = __importDefault(require("./src/Controller/Index"));
const Environment_1 = require("./src/Configs/Environment");
const node_cron_1 = __importDefault(require("node-cron"));
const MainFunction_1 = require("./src/Utilities/MainFunction");
(0, Environment_1.getEnvironment)();
let api = (0, express_1.default)();
let port = process.env.PORT || 3010;
api.use('/livetiming', express_1.default.json());
api.use(express_1.default.urlencoded({ extended: true }));
api.listen(port, () => {
    console.log('Api response on port', port);
});
api.use('/livetiming', Index_1.default);
node_cron_1.default.schedule('*/1 * * * *', () => {
    (0, MainFunction_1.MainFunction)();
});
exports.default = api;
//# sourceMappingURL=index.js.map