import { BookData } from "../../domain"

export class BooksGateway {
    public data: BookData

    constructor(response: string) {
        const parseResponse = JSON.parse(response)

        this.data = {
            books: parseResponse.books,
            totalRows: parseResponse.totalRows
        }
    }
}