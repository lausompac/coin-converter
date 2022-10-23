import { Router } from "express";
import { ConverterController } from "../controller/ConverterController";

export const converterRouter = Router();

const converterController = new ConverterController();

converterRouter.get("/:originCoin/:value", converterController.getQuotation);