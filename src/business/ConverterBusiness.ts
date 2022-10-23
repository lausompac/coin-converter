import { ConverterDatabase } from "../database/ConverterDatabase"
import { RequestError } from "../errors/RequestError"
import { IConvertInputDTO } from "../models/Coin"

export class ConverterBusiness {
    constructor(
        private converterDatabase: ConverterDatabase = new ConverterDatabase()
    ) { }

    getQuotation = async (input: IConvertInputDTO): Promise<any> => {
        const { originCoin, value } = input

        if (!originCoin || !value) {
            throw new RequestError("Missing input")
        }

        if (originCoin === "" || value === "") {
            throw new RequestError("Empty input")
        }

        if (Number(value) <= 0) {
            throw new RequestError("Value must be greater than 0")
        }

        const coins = await this.converterDatabase.getCoins()

        const quotation = coins.map((coin) => {
            const result = this.converterDatabase.getQuotations(coin.symbol, originCoin, value)

            return result
        })

        const response = await Promise.all(quotation)
        //modelar resposta

        return response

    }
}