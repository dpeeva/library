import { observable, runInAction } from "mobx"
import { BookData, BooksRequestType } from "../../domain"
import { NotificationService } from "../../utils"
import { IBooksConnection } from "../connections"
import { BooksParser } from "../parsers"

export class BooksProvider {
    data: BookData
    options: BooksRequestType

    constructor(private connection: IBooksConnection, options?: BooksRequestType) {
        this.data = this.setInitialData()
        this.options = options || {} as BooksRequestType
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
            const raw = await this.connection.fetchAllBooks(this.options)
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