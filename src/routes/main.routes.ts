import express from "express";
import exchangeRoutes from "./exchange/exchange.route";

const api = express.Router();

api.use("/exchange", exchangeRoutes);

export default api;
