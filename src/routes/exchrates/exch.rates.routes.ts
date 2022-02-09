import { Request, Response, NextFunction, Router } from "express";

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
    res.json("dailyrates");
  };
}
