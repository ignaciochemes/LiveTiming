import { Service } from "typedi";

@Service()
export default class HomeService {
    constructor() {}

    async postJson(): Promise<any> {
        return 'hola';
    }
}