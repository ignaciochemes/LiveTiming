import { Service } from "typedi";
import * as path from 'path';
import * as fs from 'fs';

@Service()
export default class HomeService {
    constructor() {}

    async postJson(): Promise<any> {
        try {
            let json = fs.readFileSync(path.join(__dirname, '../../../json/210916_154508_Q.json'), 'utf8');
            return JSON.stringify(json, null, 2);
        } catch (e) {
            console.log(e);
        }
    }
}