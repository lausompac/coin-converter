import { BaseDatabase } from "./BaseDatabase";
import axios from "axios";
import { IConvertOutputDTO } from "../models/Currency";


export class ConverterDatabase extends BaseDatabase {
    public static TABLE_NAME = "Currencys";

    getCurrencies = async () => {
        const result = await BaseDatabase
            .connection(ConverterDatabase.TABLE_NAME)
            .select("symbol")

        return result

    }

    getQuotations = async (currency: string, originCurrency: string, value: string): Promise<IConvertOutputDTO | undefined> => {
        const result = await axios.get(`https://economia.awesomeapi.com.br/last/${currency}-${originCurrency}`)

        const calculate = Number(value) / Number(result.data[`${currency}${originCurrency}`].high)

        const response: IConvertOutputDTO = {
            currency, 
            value: calculate.toFixed(2)
        }

        return response

    }
}