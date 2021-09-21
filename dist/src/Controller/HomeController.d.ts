import HomeService from "src/Services/HomeService";
export default class HomeController {
    private _homeService;
    constructor(_homeService: HomeService);
    sendJson(): Promise<any>;
}
