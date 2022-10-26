import { Router } from "express";
import { CurrencyController } from "../controller/CurrencyController";

export const currencyRouter = Router();

const currencyController = new CurrencyController();

currencyRouter.get("/", currencyController.getCurrencies);
currencyRouter.post("/create", currencyController.createCurrency);
currencyRouter.delete("/delete", currencyController.deleteCurrency);