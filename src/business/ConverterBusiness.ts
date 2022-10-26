import { ConverterDatabase } from "../database/ConverterDatabase"
import { RequestError } from "../errors/RequestError"
import { CurrencyResponse, IConvertInputDTO, IConvertOutputDTO } from "../models/Currency"

export class ConverterBusiness {
    constructor(
        private converterDatabase: ConverterDatabase = new ConverterDatabase()
    ) { }

    getQuotation = async (input: IConvertInputDTO): Promise<any> => {
        const { originCurrency, value } = input

        if (!originCurrency || !value) {
            throw new RequestError("Missing input")
        }

        if (Number(value) <= 0) {
            throw new RequestError("Value must be greater than 0")
        }

        if (isNaN(Number(value))) {
            throw new RequestError("Invalid value")
        }

        if (originCurrency !== "BRL") {
            throw new RequestError("Currency must be BRL")
        }

        const currencies = await this.converterDatabase.getCurrencies()

        const quotation = currencies.map((currency) => {
            const result = this.converterDatabase.getQuotations(currency.symbol, originCurrency, value)

            return result
        })

        const result = await Promise.all(quotation)

        function response(result: IConvertOutputDTO[]) {
            const response: CurrencyResponse = {}

            result.map((item) => {
                return response[item.currency] = item.value
            })
            return response
        }

        return response(result)

    }
}