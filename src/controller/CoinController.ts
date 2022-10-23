import { Request, Response } from "express";
import { CoinBusiness } from "../business/CoinBusiness";
import { BaseError } from "../errors/BaseError";
import { ICoinInputDTO } from "../models/Coin";

export class CoinController {
    constructor(
        private coinBusiness: CoinBusiness = new CoinBusiness()
    ) { }

    createCoin = async (req: Request, res: Response) => {
        try {
            const input: ICoinInputDTO = {
                name: req.body.name,
                symbol: req.body.symbol
            }

            const response = await this.coinBusiness.createCoin(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(400).send({ message: "Unexpected error occurred while creating coin" })

        }
    }

    getCoins = async (req: Request, res: Response) => {
        try {
            const response = await this.coinBusiness.getCoins()

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(400).send({ message: "Unexpected error occurred while getting coins" })

        }
    }

    deleteCoin = async (req: Request, res: Response) => {
        try {
            const symbol = req.body.symbol

            const response = await this.coinBusiness.deleteCoin(symbol)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(400).send({ message: "Unexpected error occurred while deleting coin" })

        }
    }
}