import { Request, Response, NextFunction, Router } from "express";
import { PingRoute } from "./ping";
import { ExchRatesRoute } from "./exchrates";
export class APIRoutes {
  public static path = "/api";
  private static instance: APIRoutes;
  private router = Router();

  private constructor() {
    this.router.get("/", this.get);
    this.router.use(PingRoute.path, PingRoute.router);
    this.router.use(ExchRatesRoute.path, ExchRatesRoute.router);
  }

    static get router() {
        if (!APIRoutes.instance) {
            APIRoutes.instance = new APIRoutes();
        }
        return APIRoutes.instance.router;
    }
    private get = async (req: Request,res: Response, NextFunction: NextFunction){
        res.status(200).json({ online: true });
    }
}
