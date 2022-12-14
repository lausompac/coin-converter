import { CurrencyDatabase } from "../database/CurrencyDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { Currency, ICurrencyDB, ICurrencyInputDTO } from "../models/Currency"
import { IdGenerator } from "../services/IdGenerator"

export class CurrencyBusiness {
    constructor(
        private currencyDatabase: CurrencyDatabase = new CurrencyDatabase(),
        private idGenerator: IdGenerator = new IdGenerator()
    ) { }

    getCurrencies = async (): Promise<ICurrencyDB[]> => {
        const result = await this.currencyDatabase.getCurrencies()

        return result
    }

    createCurrency = async (input: ICurrencyInputDTO) => {
        const { name, symbol } = input

        const isCurrencyAlreadyRegistered = await this.currencyDatabase.getCurrencies()

        if (isCurrencyAlreadyRegistered.find((currency: any) => currency.symbol === symbol)) {
            throw new ConflictError("Currency already registered")
        }

        const id = this.idGenerator.generate()
        const currency = new Currency(
            id,
            name,
            symbol.toUpperCase()
        )

        await this.currencyDatabase.createCurrency(currency)

        const response = {
            message: "Currency created successfully"
        }

        return response
    }

    deleteCurrency = async (symbol: string) => {

        const isCurrencyAlreadyRegistered = await this.currencyDatabase.getCurrencies()

        if (!isCurrencyAlreadyRegistered.find((currency: any) => currency.symbol === symbol)) {
            throw new NotFoundError("Currency not registered")
        }

        await this.currencyDatabase.deleteCurrency(symbol)

        const response = {
            message: "Currency deleted successfully"
        }

        return response
    }
}