import { Coin, ICoinDB } from "../models/Coin";
import { BaseDatabase } from "./BaseDatabase";

export class CoinDatabase extends BaseDatabase {
    public static TABLE_NAME = "Coins";


    getCoins = async (): Promise<ICoinDB[]> => {
        const result = await BaseDatabase
            .connection(CoinDatabase.TABLE_NAME)
            .select("*")

        return result
    }

    createCoin = async (coin: Coin) => {
        const coinDB: ICoinDB = {
            id: coin.getId(),
            name: coin.getName(),
            symbol: coin.getSymbol()
        }

        await BaseDatabase
            .connection(CoinDatabase.TABLE_NAME)
            .insert(coinDB)
    }

    deleteCoin = async (symbol: string)=> {
        await BaseDatabase
            .connection(CoinDatabase.TABLE_NAME)
            .delete()
            .where({ symbol })
    }
}