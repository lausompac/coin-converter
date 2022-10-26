import { CurrencyBusiness } from '../../src/business/CurrencyBusiness';
import { CurrencyDatabaseMock } from '../mocks/CurrencyDatabaseMock';
import { IdGeneratorMock } from '../mocks/services/IdGeneratorMock';

describe("CurrencyBusiness test", () => {
    const currencyBusiness = new CurrencyBusiness(
        new CurrencyDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Succeded get currencys", async () => {
        const response = await currencyBusiness.getCurrencys();

        expect(response).toEqual([
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
        ])

        expect(response.length).toEqual(3)
        expect(response[0].id).toEqual("1")
        expect(response[0].name).toEqual("Dólar Americano")
        expect(response[0].symbol).toEqual("USD")
        expect(response[1].id).toEqual("2")
        expect(response[1].name).toEqual("Euro")
        expect(response[1].symbol).toEqual("EUR")
        expect(response[2].id).toEqual("3")
        expect(response[2].name).toEqual("Rúpia Indiana")
        expect(response[2].symbol).toEqual("INR")
    })

});
