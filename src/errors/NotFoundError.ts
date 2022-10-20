import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor(
        statusCode: number = 404,
        message: string = "Not found"
    ) {
        super(statusCode, message);
    }
}