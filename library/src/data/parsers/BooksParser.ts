import { BookData } from "../../domain"

export class BooksParser {
    public data: BookData

    constructor(response: string) {
        const parsedResponse = response && JSON.parse(response)

        this.data = {
            books: parsedResponse?.books || [], // TODO: send from BE
            totalRows: parsedResponse?.totalRows || 0 // TODO: send from BE
        }
    }
}