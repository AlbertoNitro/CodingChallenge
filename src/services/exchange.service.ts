import { ExchangeDto } from "../dtos/exchange.dto";
import * as request from "superagent";
import logger from "../utils/logger";
import { HttpService } from "./http.service";

export class ExchangeService {

    public static readonly API_END_POINT = "https://api.exchangeratesapi.io";
    public static readonly END_POINT = "/latest";
    private httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    async find(): Promise<ExchangeDto> {
        return await this.httpService.get(ExchangeService.API_END_POINT + ExchangeService.END_POINT);
    }
}


