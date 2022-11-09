import { NextFunction, Request, Response } from "express";
import { RequestError } from "../errors/RequestError";

export const CurrencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { name, symbol } = req.body;

    if (name.length < 3) {
        throw new RequestError("Name must have at least 3 characters")
    }

    if (name.length > 20) {
        throw new RequestError("Name must have at most 20 characters")
    }

    if (symbol.length < 3) {
        throw new RequestError("Symbol must have at least 3 characters")
    }

    if (symbol.length > 5) {
        throw new RequestError("Symbol must have at most 5 characters")
    }

    if (!/^[a-zA-Z]+$/.test(symbol)) {
        throw new RequestError("Symbol must have only letters")
    }


    next();
}