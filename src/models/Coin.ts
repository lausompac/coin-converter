export interface ICoinDB {
    id: string,
    name: string,
    symbol: string
}

export class Coin {
    constructor(
        private id: string,
        private name: string,
        private symbol: string
    ) { }

    public getId = () => this.id
    public getName = () => this.name
    public getSymbol = () => this.symbol

}

export interface IConvertInputDTO {
    originCoin: string,
    value: string
}

export interface ICoinInputDTO {
    name: string,
    symbol: string
}