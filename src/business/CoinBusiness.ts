import { CoinDatabase } from "../database/CoinDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { Coin, ICoinInputDTO } from "../models/Coin"
import { IdGenerator } from "../services/IdGenerator"

export class CoinBusiness {
    constructor(
        private coinDatabase: CoinDatabase = new CoinDatabase(),
        private idGenerator: IdGenerator = new IdGenerator()
    ) { }

    getCoins = async (): Promise<any> => {
        const result = await this.coinDatabase.getCoins()

        return result
    }

    createCoin = async (input: ICoinInputDTO) => {
        const { name, symbol } = input

        if(!name || !symbol) {
            throw new RequestError("Missing input")
        }

        if(name === "" || symbol === "") {
            throw new RequestError("Empty input")
        }

        if(name.length < 3) {
            throw new RequestError("Name must have at least 3 characters")
        }

        if(symbol.length < 3) {
            throw new RequestError("Symbol must have at least 3 characters")
        }

        const isCoinAlreadyRegistered = await this.coinDatabase.getCoins()

        if(isCoinAlreadyRegistered.find((coin: any) => coin.symbol === symbol)) {
            throw new ConflictError("Coin already registered")
        }
        
        const id = this.idGenerator.generate()
        const coin = new Coin(
            id,
            name,
            symbol
        )

        await this.coinDatabase.createCoin(coin)

        const response = {
            message: "Coin created successfully"
        }

        return response
    }

    deleteCoin = async (symbol: string) => {

        if(!symbol) {
            throw new RequestError("Missing input")
        }

        if(symbol === "") {
            throw new RequestError("Empty input")
        }

        const isCoinAlreadyRegistered = await this.coinDatabase.getCoins()

        if(!isCoinAlreadyRegistered.find((coin: any) => coin.symbol === symbol)) {
            throw new NotFoundError("Coin not registered")
        }

        await this.coinDatabase.deleteCoin(symbol)

        const response = {
            message: "Coin deleted successfully"
        }

        return response
    }
}