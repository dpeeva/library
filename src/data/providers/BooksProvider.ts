import { observable, runInAction } from "mobx"
import { BookData, BooksRequestType } from "../domain"
import { NotificationService } from "../../utils"
import { IBooksConnection } from "../connections"
import { BooksParser } from "../parsers"
import { DataProvider } from "./DataProvider"

export class BooksProvider extends DataProvider<BookData & any, BooksRequestType> {

    constructor(private connection: IBooksConnection, options?: BooksRequestType) {
        super("BooksProvider", options)
    }

    protected setInitialData() {
        return observable<BookData>({
            books: observable([]),
            totalRows: 0
        })
    }

    public setOptions(options: BooksRequestType): this {
        const provider = new BooksProvider(this.connection, options) as this
        provider.data = observable({
            books: this.data.books,
            totalRows: this.data.totalRows
        })
        return provider
    }

    public async fetch(): Promise<void> {
        try {
            const raw = await this.connection.fetchAllBooks({})
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

    public async addBook(): Promise<void> {
        if (!this.options) {
            return
        }

        try {
            const raw = await this.connection.createBook(this.options)
            const parser = new BooksParser(raw)

            runInAction(() => {
                this.data.books.replace([...this.data.books, ...parser.data.books])
                this.data.totalRows = parser.data.totalRows
            })
        } catch (err) {
            NotificationService.getInstance().notify("Books could not be loaded.", "error")
            throw err
        }
    }
}