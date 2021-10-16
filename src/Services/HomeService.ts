import path from "path";
import fs from 'fs';
import { Service } from "typedi";
import { getMostRecentFile, readJsonReplacer } from '../Utilities/UtilityFunctions';
import { BadRequestError } from "routing-controllers";


@Service()
export default class HomeService {
    constructor() {}
    
    async getJson(): Promise<any> {
        let lastJson = await getMostRecentFile(path.join(__dirname, '../../../AccServer/results/'));
        if(!lastJson || lastJson == undefined || lastJson == null) throw new BadRequestError('No existe ningun archivo para mostrar!');
        let jsonDir = fs.readFileSync(path.join(__dirname, `../../../AccServer/results/${lastJson.file}`), 'utf-8');
        let replacer = await readJsonReplacer(jsonDir);
        let response = { replacer: replacer, jsonName: lastJson.file };
        return response;
    }
}