import { IObservableArray } from "mobx"
import { Book, BookData } from "../domain"

export class BooksParser {
    public data: BookData

    constructor(response: string) {
        this.data = this.parseResponse(response)
    }

    parseResponse(response: string) {
        const parsedResponse = JSON.parse(response)
        const books = Array.isArray(parsedResponse) ? parsedResponse : [parsedResponse]
        const id = Array.isArray(parsedResponse) ? "" : (parsedResponse as unknown as Book)._id

        return {
            books: books as IObservableArray<Book>,
            totalRows: parsedResponse.length
        }
    }
}