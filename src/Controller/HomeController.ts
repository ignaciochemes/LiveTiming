import { JsonController, Post } from "routing-controllers";
import HomeService from "src/Services/HomeService";
import { Service } from "typedi";

@JsonController('/api/json')
@Service()
export default class HomeController {
    constructor(
        private _homeService: HomeService
    ) {}

    @Post()
    async sendJson(): Promise<any> {
        return await this._homeService.postJson();
    }
}