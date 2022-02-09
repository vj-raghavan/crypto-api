import { Request, Response, NextFunction, Router } from "express";
import { readFile } from "../../services/utils/fileReader";
import { FILE_PATH } from "../../services/utils/constants";
export class ExchRatesRoute {
  public static path = "/exch";
  public static instance: ExchRatesRoute;
  private router = Router();

  private constructor() {
    this.router.get("/", this.get);
    this.router.get("/dailyrates", this.getDailyRates);
  }
  static get router() {
    if (!ExchRatesRoute.instance) {
      ExchRatesRoute.instance = new ExchRatesRoute();
    }
    return ExchRatesRoute.instance.router;
  }
  private get = async (req: Request, res: Response, next: NextFunction) => {
    res.json("rateroute");
    next();
  };
  private getDailyRates = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const fileContent = await readFile(FILE_PATH);
      const parsedFile = JSON.parse(fileContent);
      res.json(parsedFile);
    } catch (err) {
      console.error("Error occurred while reading the file");
      res.sendStatus(500).json({
        error: err,
        message: "Server Error",
      });
    }
  };
}
