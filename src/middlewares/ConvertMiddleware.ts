import { NextFunction, Request, Response } from "express";
import { RequestError } from "../errors/RequestError";


export const ConvertMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { originCurrency, value } = req.params;
    
    if (Number(value) <= 0) {
        throw new RequestError("Value must be greater than 0")
    }

    if (isNaN(Number(value))) {
        throw new RequestError("Invalid value")
    }

    if (originCurrency !== "BRL") {
        throw new RequestError("Currency must be BRL")
    }

    next();
}