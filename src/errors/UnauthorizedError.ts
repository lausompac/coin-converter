import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
    constructor(
        statusCode: number = 401,
        message: string = "Unauthorized"
    ) {
        super(statusCode, message);
    }
}