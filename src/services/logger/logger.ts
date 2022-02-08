import * as debug from "debug";
import * as winston from "winston";
import * as expressWinston from "express-winston";

export const dbg = debug("crypto-express-api");

const winstonOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: true,
  colorise: false,
};
export const logger = expressWinston.logger(winstonOptions);
