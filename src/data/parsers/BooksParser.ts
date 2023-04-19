import { IObservableArray } from "mobx"
import { Book, BookData } from "../domain"

export class BooksParser {
    public data: BookData

    constructor(response: string) {
        this.data = response
            ? this.parseResponse(response)
            : this.getEmptyData()
    }

    parseResponse(response: string): BookData {
        const parsedResponse = JSON.parse(response)
        const books = Array.isArray(parsedResponse) ? parsedResponse : [parsedResponse]

        return {
            books: books as IObservableArray<Book>,
            totalRows: parsedResponse.length
        }
    }

    getEmptyData(): BookData {
        return {
            books: [] as unknown as IObservableArray<Book>,
            totalRows: 0
        }
    }
}