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
    async getJson(): Promise<JSON> {
        let response = await this._homeService.getJson();
        return response;
    }
}