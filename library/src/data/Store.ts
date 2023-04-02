import { BookStore } from "./BookStore"
import { IBooksConnection } from "./connections"
import { BooksProvider } from "./providers"

export class Store {
    public readonly bookStore: BookStore

    constructor(connection: IBooksConnection) {
        const provider = new BooksProvider(connection)

        this.bookStore = new BookStore(provider)
    }
}