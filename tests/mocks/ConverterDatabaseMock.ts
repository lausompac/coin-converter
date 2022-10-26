import axios from "axios";
import { BaseDatabase } from "../../src/database/BaseDatabase";
import { CurrencyResponse, IConvertOutputDTO, ICurrencyDB } from "../../src/models/Currency"



export class ConverterDatabaseMock extends BaseDatabase {
    public static TABLE_NAME = "Currencys";

    getCurrencies = async () => {

        const Currencies: ICurrencyDB[] = [
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

        return Currencies
    }

    getQuotations = async (currency: string, originCurrency: string, value: string): Promise<any> => {
        switch (currency) {
            case "USD":
                return {
                    currency,
                    value: (Number(value) / 5.5).toFixed(2)
                }
            case "EUR":
                return {
                    currency,
                    value: (Number(value) / 6.5).toFixed(2)
                }
            case "INR":
                return {
                    currency,
                    value: (Number(value) / 0.07).toFixed(2)
                }

            default:
                return undefined

        }
    }
}