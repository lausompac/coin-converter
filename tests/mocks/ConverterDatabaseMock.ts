import axios from "axios";
import { BaseDatabase } from "../../src/database/BaseDatabase";
import { ICoinDB } from "../../src/models/Coin"



export class ConverterDatabaseMock extends BaseDatabase {
    public static TABLE_NAME = "Coins";

    getCoins = async () => {

        const coins: ICoinDB[] = [
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

        return coins
    }

    getQuotations = async (coin: string, originCoin: string, value: string): Promise<any> => {
        switch (coin) {
            case "USD":
                return {
                    coin,
                    value: (Number(value) / 5.5).toFixed(2)
                }
            case "EUR":
                return {
                    coin,
                    value: (Number(value) / 6.5).toFixed(2)
                }
            case "INR":
                return {
                    coin,
                    value: (Number(value) / 0.07).toFixed(2)
                }

            default:
                return undefined

        }
    }
}