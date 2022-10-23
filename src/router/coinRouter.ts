import { Router } from "express";
import { CoinController } from "../controller/CoinController";

export const coinRouter = Router();

const coinController = new CoinController();

coinRouter.get("/", coinController.getCoins);
coinRouter.post("/create", coinController.createCoin);
coinRouter.delete("/delete", coinController.deleteCoin);