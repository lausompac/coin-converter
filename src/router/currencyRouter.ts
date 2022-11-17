import { Router } from "express";
import { CurrencyController } from "../controller/CurrencyController";
import { CurrencyMiddleware } from "../middlewares/CurrencyMiddleware";

export const currencyRouter = Router();

const currencyController = new CurrencyController();

currencyRouter.get("/", currencyController.getCurrencies);
currencyRouter.post("/create", CurrencyMiddleware, currencyController.createCurrency);
currencyRouter.delete("/delete", currencyController.deleteCurrency);