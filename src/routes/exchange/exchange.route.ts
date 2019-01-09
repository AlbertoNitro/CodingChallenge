import { ExchangeController } from "../../controllers/exchange.controller";
import express from "express";

const exchangeRoutes = express.Router();
const exchangeController: ExchangeController = new ExchangeController();

exchangeRoutes.get("", (req, res) => {
    exchangeController.find(req, res);
});

export default exchangeRoutes;
