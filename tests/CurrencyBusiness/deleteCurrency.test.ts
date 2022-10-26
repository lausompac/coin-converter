import { CurrencyBusiness } from '../../src/business/CurrencyBusiness';
import { CurrencyDatabaseMock } from '../mocks/CurrencyDatabaseMock';
import { IdGeneratorMock } from '../mocks/services/IdGeneratorMock';

describe("CurrencyBusiness test", () => {
    const currencyBusiness = new CurrencyBusiness(
        new CurrencyDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Succeded delete currency", async () => {
        const symbol = "USD"

        const response = await currencyBusiness.deleteCurrency(symbol);

        expect(response.message).toEqual("Currency deleted successfully")
    })

    test("Failed delete currency - Invalid data", async () => {
        expect.assertions(2);

        const symbol = ""

        try {
            await currencyBusiness.deleteCurrency(symbol);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Missing input");
        }
    })

    test("Failed delete currency - Currency not registered", async () => {
        expect.assertions(2);

        const symbol = "BTC"

        try {
            await currencyBusiness.deleteCurrency(symbol);
        } catch (error) {
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Currency not registered");
        }
    });

});