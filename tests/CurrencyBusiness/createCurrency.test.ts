import { CurrencyBusiness } from '../../src/business/CurrencyBusiness';
import { CurrencyDatabaseMock } from '../mocks/CurrencyDatabaseMock';
import { IdGeneratorMock } from '../mocks/services/IdGeneratorMock';

describe("CurrencyBusiness test", () => {
    const currencyBusiness = new CurrencyBusiness(
        new CurrencyDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Succeded create Currency", async () => {
        const input = {
            name: "Bitcoin",
            symbol: "BTC"
        }

        const response = await currencyBusiness.createCurrency(input);

        expect(response.message).toEqual("Currency created successfully")
    })

    test("Failed create currency - Invalid data", async () => {
        expect.assertions(2);

        const input = {
            name: "",
            symbol: ""
        }

        try {
            await currencyBusiness.createCurrency(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Missing input");
        }
    })

    test("Failed create currency - Currency already registered", async () => {
        expect.assertions(2);

        const input = {
            name: "Dólar Americano",
            symbol: "USD"
        }

        try {
            await currencyBusiness.createCurrency(input);
        } catch (error) {
            expect(error.statusCode).toBe(409);
            expect(error.message).toBe("Currency already registered");
        }
    });

    test("Failed create currency - Name must have at least 3 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "Do",
            symbol: "BTC"
        }

        try {
            await currencyBusiness.createCurrency(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Name must have at least 3 characters");
        }
    });

    test("Failed create currency - Symbol must have at least 3 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "Bitcoin",
            symbol: "BT"
        }

        try {
            await currencyBusiness.createCurrency(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Symbol must have at least 3 characters");
        }
    });

    test("Failed create currency - Symbol must have at most 5 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "Bitcoin",
            symbol: "BTCBTB"
        }

        try {
            await currencyBusiness.createCurrency(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Symbol must have at most 5 characters");
        }
    });

    test("Failed create currency - Symbol must have only letters", async () => {
        expect.assertions(2);

        const input = {
            name: "Bitcoin",
            symbol: "BTC1"
        }

        try {
            await currencyBusiness.createCurrency(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Symbol must have only letters");
        }
    });


    test("Failed create currency - Name must have at most 20 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "BitcoinBitcoinBitcoinBitcoinBitcoin",
            symbol: "BTC"
        }

        try {
            await currencyBusiness.createCurrency(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Name must have at most 20 characters");
        }
    });

});
