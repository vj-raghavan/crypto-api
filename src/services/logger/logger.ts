import * as winston from "winston";
import * as expressWinston from "express-winston";

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
