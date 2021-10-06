"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const typedi_1 = require("typedi");
const UtilityFunctions_1 = require("../Utilities/UtilityFunctions");
const routing_controllers_1 = require("routing-controllers");
let HomeService = class HomeService {
    constructor() { }
    postJson() {
        return __awaiter(this, void 0, void 0, function* () {
            let lastJson = yield (0, UtilityFunctions_1.getMostRecentFile)(path_1.default.join(__dirname, '../../../json/'));
            if (!lastJson || lastJson == undefined || lastJson == null)
                throw new routing_controllers_1.BadRequestError('No existe ningun archivo para mostrar!');
            let result = fs_1.default.readFileSync(path_1.default.join(__dirname, `../../../json/${lastJson.file}`), 'utf-8');
            return yield (0, UtilityFunctions_1.readJsonReplacer)(result);
        });
    }
};
HomeService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], HomeService);
exports.default = HomeService;
//# sourceMappingURL=HomeService.js.map