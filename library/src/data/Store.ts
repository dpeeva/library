import { BookStore } from "./BookStore"
import { IBookConnection } from "./connections"
import { BookStream } from "./streams"

export class Store {
    public readonly bookStore: BookStore

    constructor(connection: IBookConnection) {
        const bookStream = new BookStream(connection)

        this.bookStore = new BookStore(bookStream)
    }
}