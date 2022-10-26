import { Request, Response } from "express";
import { CurrencyBusiness } from "../business/CurrencyBusiness";
import { BaseError } from "../errors/BaseError";
import { ICurrencyInputDTO } from "../models/Currency";

export class CurrencyController {
    constructor(
        private currencyBusiness: CurrencyBusiness = new CurrencyBusiness()
    ) { }

    createCurrency = async (req: Request, res: Response) => {
        try {
            const input: ICurrencyInputDTO = {
                name: req.body.name,
                symbol: req.body.symbol
            }

            const response = await this.currencyBusiness.createCurrency(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(400).send({ message: "Unexpected error occurred while creating currency" })

        }
    }

    getCurrencies = async (req: Request, res: Response) => {
        try {
            const response = await this.currencyBusiness.getCurrencies()

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(400).send({ message: "Unexpected error occurred while getting currencies" })

        }
    }

    deleteCurrency = async (req: Request, res: Response) => {
        try {
            const symbol = req.body.symbol

            const response = await this.currencyBusiness.deleteCurrency(symbol)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(400).send({ message: "Unexpected error occurred while deleting currency" })

        }
    }
}