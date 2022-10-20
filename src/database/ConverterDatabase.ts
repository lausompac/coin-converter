import { BaseDatabase } from "./BaseDatabase";
import axios from "axios";


export class ConverterDatabase extends BaseDatabase {
    public static TABLE_NAME = "Coins";

    getCoins = async () => {
        const result = await BaseDatabase
            .connection(ConverterDatabase.TABLE_NAME)
            .select("symbol")

        return result

    }

    getQuotations = async (coin: string, originCoin: string, value: string): Promise<any> => {
        const result = await axios.get(`https://economia.awesomeapi.com.br/last/${coin}-${originCoin}`)

        const calculate = Number(value) / Number(result.data[`${coin}${originCoin}`].high)

        const response = {
            coin, 
            value: calculate.toFixed(2)
        }

        return response

    }
}