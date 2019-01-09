import logger from "../utils/logger";
import { ExchangeDto } from "../dtos/exchange.dto";
import { ExchangeService } from "../services/exchange.service";

export class ExchangeResource {
    private exchangeService: ExchangeService;

    constructor() {
        this.exchangeService = new ExchangeService();
    }
    async find(): Promise<ExchangeDto> {
        return await this.exchangeService.find();
    }
}
