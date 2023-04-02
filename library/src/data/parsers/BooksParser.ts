import { BookData } from "../../domain"

export class BooksParser {
    public data: BookData

    constructor(response: string) {
        const parsedResponse = response && JSON.parse(response)

        this.data = {
            books: parsedResponse?.books,
            totalRows: parsedResponse?.totalRows
        }
    }
}