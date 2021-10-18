import { postJsonCron } from '../WebServices/JsonWebServices';
import { getMostRecentFile, readJsonReplacer } from './UtilityFunctions';
import path from 'path';
import fs from 'fs';

export const MainFunction = async () => {
    try {
        let lastJson = await getMostRecentFile(path.join(__dirname, '../../../AccServer/results/'));
        if(!lastJson || lastJson == undefined || lastJson == null) throw new Error('No existe ningun archivo para mostrar!');
        let jsonDir = fs.readFileSync(path.join(__dirname, `../../../AccServer/results/${lastJson.file}`), 'utf-8');
        let replacer = await readJsonReplacer(jsonDir);
        let response = { replacer: replacer, jsonName: lastJson.file };
        console.log(`Se publico el json con nombre: ${response.jsonName}. Fecha ${Date.now()}`);
        await postJsonCron(response);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}