import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as errorHandler from "errorhandler";
import * as express from "express";
import * as expressStatusMonitor from "express-status-monitor";
import * as helmet from "helmet";
import * as methodOverride from "method-override";
import * as path from "path";

import { APIRoutes } from "./routes";
import { logger, errorLogger } from "./services/logger";

export class Server {
  public static boostrap(): Server {
    return new Server();
  }
  public app: express.Application;
  constructor() {
    this.app = express.default();
    // Initialise configuration for the application
    this.config();
    // Setup logger
    this.setLogger();
    // Setup the routes
    this.routes();
  }
  public config() {
    this.app.use(express.static(path.join(__dirname, "public")));
    // mount json form parser
    this.app.use(bodyParser.json({ limit: "50mb" }));

    // mount query string parser
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    // mount override?
    this.app.use(helmet.default());
    this.app.use(cors.default());
    this.app.use(compression.default());
    this.app.use(methodOverride.default());
    this.app.use(expressStatusMonitor.default());
    // catch 404 and forward to error handler
    this.app.use(
      (
        err: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        err.status = 404;
        next(err);
      }
    );

    // error handling
    this.app.use(errorHandler.default());

    // error logging

    this.app.use(errorLogger);
  }
  private routes() {
    // use router middleware
    this.app.use(APIRoutes.path, APIRoutes.router);
  }
  private setLogger() {
    this.app.use(logger);
  }
}
