import { Request, Response } from "express";
import { HttpStatusCode } from "../utils/http-status-codes.enum";
import logger from "../utils/logger";
import { ExchangeResource } from "../resources/exchangeResource";
import { ExchangeDto } from "../dtos/exchange.dto";

export class ExchangeController {
    private exchangeResource: ExchangeResource;

    constructor() {
        this.exchangeResource = new ExchangeResource();
    }
    async find(req: Request, res: Response): Promise<any> {
        const exchange: ExchangeDto = await this.exchangeResource.find();
        exchange ? res.status(HttpStatusCode.OK).json(exchange) : res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
    }
}
