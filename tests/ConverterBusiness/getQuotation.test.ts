import { ConverterBusiness } from '../../src/business/ConverterBusiness';
import { IConvertInputDTO } from '../../src/models/Currency';
import { ConverterDatabaseMock } from '../mocks/ConverterDatabaseMock';


describe("ConverterBusiness test", () => {
    const converterBusiness = new ConverterBusiness(
        new ConverterDatabaseMock()
    );

    test("Succeded get Currencies", async () => {
        const input: IConvertInputDTO = {
            originCurrency: "BRL",
            value: "529.99"
        }

        const response = await converterBusiness.getQuotation(input);

        expect(response).toEqual(
            {
                "USD": "96.36",
                "EUR": "81.54",
                "INR": "7571.29"
            }
        )

    });

    test("Failed get quotation - Empty Input", async () => {
        expect.assertions(2);

        try {
            const input: IConvertInputDTO = {
                originCurrency: "",
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
                originCurrency: "BRL",
                value: "-1"
            }

            await converterBusiness.getQuotation(input);

        } catch (error) {
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual("Value must be greater than 0");
        }
    });

    test("Failed get quotation - Invalid Currency", async () => {
        expect.assertions(2);

        try {
            const input: IConvertInputDTO = {
                originCurrency: "ABC",
                value: "1"
            }

            await converterBusiness.getQuotation(input);

        } catch (error) {
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual("Currency must be BRL");
        }
    });

    test("Failed get quotation - Invalid value", async () => {
        expect.assertions(2);

        try {
            const input: IConvertInputDTO = {
                originCurrency: "BRL",
                value: "abc"
            }

            await converterBusiness.getQuotation(input);

        } catch (error) {
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual("Invalid value");
        }
    });
})