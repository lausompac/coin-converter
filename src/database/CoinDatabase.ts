import { Coin, ICoinDB } from "../models/Coin";
import { BaseDatabase } from "./BaseDatabase";

export class CoinDatabase extends BaseDatabase {
    public static TABLE_NAME = "Coins";


    getCoins = async (): Promise<any> => {
        const result = await BaseDatabase
            .connection(CoinDatabase.TABLE_NAME)
            .select("*")

        return result
    }

    createCoin = async (coin: Coin): Promise<void> => {
        const coinDB: ICoinDB = {
            id: coin.getId(),
            name: coin.getName(),
            symbol: coin.getSymbol()
        }

        await BaseDatabase
            .connection(CoinDatabase.TABLE_NAME)
            .insert(coinDB)
    }

    deleteCoin = async (symbol: string): Promise<void> => {
        await BaseDatabase
            .connection(CoinDatabase.TABLE_NAME)
            .delete()
            .where({ symbol })
    }
}