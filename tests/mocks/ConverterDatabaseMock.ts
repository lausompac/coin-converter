import axios from "axios";
import { BaseDatabase } from "../../src/database/BaseDatabase";
import { ICurrencyDB } from "../../src/models/Currency"



export class ConverterDatabaseMock extends BaseDatabase {
    public static TABLE_NAME = "Currencys";

    getCurrencys = async () => {

        const Currencys: ICurrencyDB[] = [
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

    getQuotations = async (Currency: string, originCurrency: string, value: string): Promise<any> => {
        switch (Currency) {
            case "USD":
                return {
                    Currency,
                    value: (Number(value) / 5.5).toFixed(2)
                }
            case "EUR":
                return {
                    Currency,
                    value: (Number(value) / 6.5).toFixed(2)
                }
            case "INR":
                return {
                    Currency,
                    value: (Number(value) / 0.07).toFixed(2)
                }

            default:
                return undefined

        }
    }
}