import { BaseError } from "./BaseError";

export class RequestError extends BaseError {
    constructor(
        statusCode: number = 400,
        message: string = "Invalid request"
    ) {
        super(statusCode, message);
    }
}  