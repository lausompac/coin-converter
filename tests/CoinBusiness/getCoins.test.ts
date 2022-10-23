import { CoinBusiness } from '../../src/business/CoinBusiness';
import { CoinDatabaseMock } from '../mocks/CoinDatabaseMock';
import { IdGeneratorMock } from '../mocks/services/IdGeneratorMock';

describe("CoinBusiness test", () => {
    const coinBusiness = new CoinBusiness(
        new CoinDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Succeded get coins", async () => {
        const response = await coinBusiness.getCoins();

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
