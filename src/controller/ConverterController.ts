import { ConverterBusiness } from "../business/ConverterBusiness"
import { Request, Response } from "express"
import { BaseError } from "../errors/BaseError"
import { IConvertInputDTO } from "../models/Currency"

export class ConverterController {
    constructor(
        private converterBusiness: ConverterBusiness = new ConverterBusiness()
    ) { }

    getQuotation = async (req: Request, res: Response) => {
        try {
            const input: IConvertInputDTO = {
                originCurrency: req.params.originCurrency as string,
                value: req.params.value as string
            }

            const response = await this.converterBusiness.getQuotation(input)

            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                res.status(error.statusCode).send({ message: error.message })
            }
            res.status(400).send({ message: "Unexpected error occurred while getting quotation" })

        }
    }
}