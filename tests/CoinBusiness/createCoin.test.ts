import { CoinBusiness } from '../../src/business/CoinBusiness';
import { CoinDatabaseMock } from '../mocks/CoinDatabaseMock';
import { IdGeneratorMock } from '../mocks/services/IdGeneratorMock';

describe("CoinBusiness test", () => {
    const coinBusiness = new CoinBusiness(
        new CoinDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Succeded create coin", async () => {
        const input = {
            name: "Bitcoin",
            symbol: "BTC"
        }

        const response = await coinBusiness.createCoin(input);

        expect(response.message).toEqual("Coin created successfully")
    })

    test("Failed create coin - Invalid data", async () => {
        expect.assertions(2);

        const input = {
            name: "",
            symbol: ""
        }

        try {
            await coinBusiness.createCoin(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Missing input");
        }
    })

    test("Failed create coin - Coin already registered", async () => {
        expect.assertions(2);

        const input = {
            name: "Dólar Americano",
            symbol: "USD"
        }

        try {
            await coinBusiness.createCoin(input);
        } catch (error) {
            expect(error.statusCode).toBe(409);
            expect(error.message).toBe("Coin already registered");
        }
    });

    test("Failed create coin - Name must have at least 3 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "Do",
            symbol: "BTC"
        }

        try {
            await coinBusiness.createCoin(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Name must have at least 3 characters");
        }
    });

    test("Failed create coin - Symbol must have at least 3 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "Bitcoin",
            symbol: "BT"
        }

        try {
            await coinBusiness.createCoin(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Symbol must have at least 3 characters");
        }
    });

    test("Failed create coin - Symbol must have at most 5 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "Bitcoin",
            symbol: "BTCBTB"
        }

        try {
            await coinBusiness.createCoin(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Symbol must have at most 5 characters");
        }
    });

    test("Failed create coin - Symbol must have only letters", async () => {
        expect.assertions(2);

        const input = {
            name: "Bitcoin",
            symbol: "BTC1"
        }

        try {
            await coinBusiness.createCoin(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Symbol must have only letters");
        }
    });


    test("Failed create coin - Name must have at most 20 characters", async () => {
        expect.assertions(2);

        const input = {
            name: "BitcoinBitcoinBitcoin",
            symbol: "BTC"
        }

        try {
            await coinBusiness.createCoin(input);
        } catch (error) {
            expect(error.statusCode).toBe(400);
            expect(error.message).toBe("Name must have at most 20 characters");
        }
    });

});
