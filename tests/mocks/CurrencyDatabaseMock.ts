import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ICurrencyDB } from "../../src/models/Currency";

export class CurrencyDatabaseMock extends BaseDatabase {
    public static TABLE_NAME = "Currencys";

    getCurrencies = async (): Promise<ICurrencyDB[]> => {
        const Currencys = [
            {
                id: "1",
                name: "Dólar Americano",
                symbol: "USD"
            },
            {
                id: "2",
                name: "Euro",
                symbol: "EUR"
            },
            {
                id: "3",
                name: "Rúpia Indiana",
                symbol: "INR"
            }
        ]

        return Currencys
    }

    createCurrency = async (Currency: any): Promise<void> => {

    }

    deleteCurrency = async (symbol: string): Promise<void> => {

    }
}