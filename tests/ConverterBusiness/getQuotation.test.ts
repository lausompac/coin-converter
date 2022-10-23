import { ConverterBusiness } from '../../src/business/ConverterBusiness';
import { IConvertInputDTO } from '../../src/models/Coin';
import { ConverterDatabaseMock } from '../mocks/ConverterDatabaseMock';


describe("ConverterBusiness test", () => {
    const converterBusiness = new ConverterBusiness(
        new ConverterDatabaseMock()

    );

    test("Succeded get coins", async () => {
        const input: IConvertInputDTO = {
            originCoin: "BRL",
            value: "529.99"
        }

        const response = await converterBusiness.getQuotation(input);

        expect(response).toEqual([
            {
                coin: "USD",
                value: "96.36"
            },
            {
                coin: "EUR",
                value: "81.54"
            },
            {
                coin: "INR",
                value: "7571.29"
            }
        ])

        expect(response.length).toEqual(3)

    });

    test("Failed get quotation - Empty Input", async () => {
        expect.assertions(2);

        try {
            const input: IConvertInputDTO = {
                originCoin: "",
                value: ""
            }

            await converterBusiness.getQuotation(input);

        } catch (error) {
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Failed get quotation - Value less than 0", async () => {
        expect.assertions(2);

        try {
            const input: IConvertInputDTO = {
                originCoin: "BRL",
                value: "-1"
            }

            await converterBusiness.getQuotation(input);

        } catch (error) {
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual("Value must be greater than 0");
        }
    });

    test("Failed get quotation - Invalid coin", async () => {
        expect.assertions(2);

        try {
            const input: IConvertInputDTO = {
                originCoin: "ABC",
                value: "1"
            }

            await converterBusiness.getQuotation(input);

        } catch (error) {
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual("Invalid coin");
        }
    });

    test("Failed get quotation - Invalid value", async () => {
        expect.assertions(2);

        try {
            const input: IConvertInputDTO = {
                originCoin: "BRL",
                value: "abc"
            }

            await converterBusiness.getQuotation(input);

        } catch (error) {
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual("Invalid value");
        }
    });

})