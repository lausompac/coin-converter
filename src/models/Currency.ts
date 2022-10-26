export interface ICurrencyDB {
    id: string,
    name: string,
    symbol: string
}

export class Currency {
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
    originCurrency: string,
    value: string
}

export interface IConvertOutputDTO {
    currency: string,
    value: string
}

export interface ICurrencyInputDTO {
    name: string,
    symbol: string
}

export type CurrencyResponse = {
    [key: string]: string
}