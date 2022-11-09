import { Router } from "express";
import { ConverterController } from "../controller/ConverterController";
import { ConvertMiddleware } from "../middlewares/ConvertMiddleware";

export const converterRouter = Router();

const converterController = new ConverterController();

converterRouter.get("/:originCurrency/:value", ConvertMiddleware, converterController.getQuotation);