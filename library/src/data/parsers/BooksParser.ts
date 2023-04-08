import { IObservableArray } from "mobx"
import { Book, BookData } from "../../domain"

export class BooksParser {
    public data: BookData

    constructor(response: string) {
        const parsedResponse = JSON.parse(response)

        this.data = {
            books: [parsedResponse] as IObservableArray<Book>,
            totalRows: parsedResponse.length
        }
    }
}