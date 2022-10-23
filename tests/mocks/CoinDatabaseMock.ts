import { BaseDatabase } from "../../src/database/BaseDatabase"
import { ICoinDB } from "../../src/models/Coin";

export class CoinDatabaseMock extends BaseDatabase {
    public static TABLE_NAME = "Coins";

    getCoins = async (): Promise<ICoinDB[]> => {
        const coins = [
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

    createCoin = async (coin: any): Promise<void> => {

    }

    deleteCoin = async (symbol: string): Promise<void> => {

    }
}