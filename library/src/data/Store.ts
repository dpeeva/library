import { BookStore } from "./BookStore"
import { IBookConnection } from "./connections"
import { BooksProvider } from "./providers"

export class Store {
    public readonly bookStore: BookStore

    constructor(connection: IBookConnection) {
        const provider = new BooksProvider(connection)

        this.bookStore = new BookStore(provider)
    }
}