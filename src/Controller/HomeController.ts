import { Get, JsonController } from "routing-controllers";
import HomeService from "../Services/HomeService";
import { Service } from "typedi";

@JsonController('/api/json')
@Service()
export default class HomeController {
    constructor(
        private _homeService: HomeService
    ) {}

    @Get()
    async sendJson(): Promise<any> {
        let response = await this._homeService.postJson();
        return response;
    }
}