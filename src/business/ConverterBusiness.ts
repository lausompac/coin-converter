import { ConverterDatabase } from "../database/ConverterDatabase"
import { ICoinInputDTO } from "../models/Coin"

export class ConverterBusiness {
    constructor(
        private converterDatabase: ConverterDatabase = new ConverterDatabase()
    ) { }

    getQuotation = async (input: ICoinInputDTO): Promise<any> => {
        const { originCoin, value } = input

        const coins = await this.converterDatabase.getCoins()

        const cotation = coins.map((coin) => {
            const result = this.converterDatabase.getQuotations(coin.symbol, originCoin, value)

            return result
        })

        const response = await Promise.all(cotation)
        //modelar resposta

        return response


    }
}