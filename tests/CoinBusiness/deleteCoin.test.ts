import { CoinBusiness } from '../../src/business/CoinBusiness';
import { CoinDatabaseMock } from '../mocks/CoinDatabaseMock';
import { IdGeneratorMock } from '../mocks/services/IdGeneratorMock';

describe("CoinBusiness test", () => {
    const coinBusiness = new CoinBusiness(
        new CoinDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Succeded delete coin", async () => {
        const symbol = "USD"

        const response = await coinBusiness.deleteCoin(symbol);

        expect(response.message).toEqual("Coin deleted successfully")
    })

    test("Failed delete coin - Invalid data", async () => {
        expect.assertions(2);

        const symbol = ""

        try {
            await coinBusiness.deleteCoin(symbol);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Missing input");
        }
    })

    test("Failed delete coin - Coin not registered", async () => {
        expect.assertions(2);

        const symbol = "BTC"

        try {
            await coinBusiness.deleteCoin(symbol);
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Coin not registered");
        }
    });

});