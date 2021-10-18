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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Index_1 = __importDefault(require("./src/Controller/Index"));
const Environment_1 = require("./src/Configs/Environment");
const MainFunction_1 = require("./src/Utilities/MainFunction");
const Chokidar = __importStar(require("chokidar"));
(0, Environment_1.getEnvironment)();
let api = (0, express_1.default)();
let port = process.env.PORT || 3010;
api.use('/livetiming', express_1.default.json());
api.use(express_1.default.urlencoded({ extended: true }));
api.listen(port, () => {
    console.log('Api response on port', port);
});
api.use('/livetiming', Index_1.default);
const watcher = Chokidar.watch('./AccServer/results', {
    ignoreInitial: true
});
watcher.on('add', (path) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, MainFunction_1.MainFunction)();
    console.log(`Se cargo el archivo de la carpeta: ${path}`);
}));
exports.default = api;
//# sourceMappingURL=index.js.map