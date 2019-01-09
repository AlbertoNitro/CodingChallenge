import { RatesDto } from "./rates.dto";

export interface ExchangeDto {
    rates: RatesDto;
    base: string;
    date: string;
}
