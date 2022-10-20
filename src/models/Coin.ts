export interface ICoinDB {
    id: number,
    name: string,
    symbol: string
}

export class Coin {
    constructor(
        private id: number,
        private name: string,
        private symbol: string
    ) { }

    public getId = () => this.id
    public getName = () => this.name
    public getSymbol = () => this.symbol

}

export interface ICoinInputDTO {
    originCoin: string,
    value: string
}