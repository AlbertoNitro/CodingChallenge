import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import morgan from "morgan";
const expressStatusMonitor = require("express-status-monitor");
import logger from "./utils/logger";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import api from "./routes/main.routes";
const cors = require("cors");

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cors());
app.use(morgan("dev"));
app.disable("etag"); // Evitar devolver HTTP 304
app.use(expressStatusMonitor());
logger.info("\n  >Estado del servidor en: http://localhost:3000/status \n");
app.use("/", api);
export default app;
