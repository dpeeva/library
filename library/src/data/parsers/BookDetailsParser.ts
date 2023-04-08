import { Book } from "../domain"

export class BookDetailsParser {
    public data: Book

    constructor(response: string) {
        const parsedResponse = JSON.parse(response)
        this.data = parsedResponse
    }
}