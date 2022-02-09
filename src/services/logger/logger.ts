import * as winston from "winston";
import * as expressWinston from "express-winston";
const transport = new winston.transports.Console();
const format = winston.format.combine(
  winston.format.combine(winston.format.colorize(), winston.format.json())
);
const winstonOptions = {
  transports: [transport],
  format,
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: true,
  colorise: false,
};
const errorOptions = {
  transports: [transport],
  format,
};
export const logger = expressWinston.logger(winstonOptions);
export const errorLogger = expressWinston.errorLogger(errorOptions);
