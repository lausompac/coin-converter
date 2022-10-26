import { Currency, ICurrencyDB } from "../models/Currency";
import { BaseDatabase } from "./BaseDatabase";

export class CurrencyDatabase extends BaseDatabase {
    public static TABLE_NAME = "Currencys";


    getCurrencies = async (): Promise<ICurrencyDB[]> => {
        const result = await BaseDatabase
            .connection(CurrencyDatabase.TABLE_NAME)
            .select("*")

        return result
    }

    createCurrency = async (currency: Currency) => {
        const currencyDB: ICurrencyDB = {
            id: currency.getId(),
            name: currency.getName(),
            symbol: currency.getSymbol()
        }

        await BaseDatabase
            .connection(CurrencyDatabase.TABLE_NAME)
            .insert(currencyDB)
    }

    deleteCurrency = async (symbol: string)=> {
        await BaseDatabase
            .connection(CurrencyDatabase.TABLE_NAME)
            .delete()
            .where({ symbol })
    }
}