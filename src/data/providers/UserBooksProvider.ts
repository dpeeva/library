import { observable, runInAction } from "mobx"
import { BookData, BooksRequestType } from "../domain"
import { NotificationService } from "../../utils"
import { IBooksConnection } from "../connections"
import { BooksParser } from "../parsers"
import { DataProvider } from "./DataProvider"

export class UserBooksProvider extends DataProvider<BookData & any, BooksRequestType> {

    constructor(private connection: IBooksConnection, options?: BooksRequestType) {
        super("UserBooksProvider", options)
    }

    protected setInitialData() {
        return observable<BookData>({
            books: observable([]),
            totalRows: 0
        })
    }

    public setOptions(options: BooksRequestType): this {
        const provider = new UserBooksProvider(this.connection, options) as this
        provider.data = observable({
            books: this.data.books,
            totalRows: this.data.totalRows
        })
        return provider
    }

    public async fetch(): Promise<void> {
        if (!this.options || !this.options._ownerId) {
            return
        }

        try {
            const raw = await this.connection.fetchUserBooks(this.options)
            const parser = new BooksParser(raw)

            runInAction(() => {
                this.data.books.replace(parser.data.books)
                this.data.totalRows = parser.data.totalRows
            })
        } catch (err) {
            NotificationService.getInstance().notify("Books could not be loaded.", "error")
            throw err
        }
    }
}