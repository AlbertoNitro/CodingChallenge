import request from "supertest";
import app from "../../src/app";
import { HttpStatusCode } from "../../src/utils/http-status-codes.enum";
import logger from "../../src/utils/logger";
import { ExchangeDto } from "../../src/dtos/exchange.dto";

const chai = require("chai");
const expect = chai.expect;

const END_POINT = "/exchange";

describe("GET " + END_POINT, () => {
    it(`expect return: ${HttpStatusCode.OK} + ExchangeDto`, (done) => {
        return request(app).get(END_POINT)
            .end( async (err, res) => {
                expect(res.status).to.equal(HttpStatusCode.OK);
                const exchangeDto: ExchangeDto = res.body;
                expect(exchangeDto.base).to.equal("EUR");
                expect(exchangeDto.date).to.equal("2019-01-08");
                expect(exchangeDto.rates).to.be.an("object");
                done();
            });
    });
});
