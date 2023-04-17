import { observable, runInAction } from "mobx"
import { NotificationService } from "../../utils"
import { IBookDetailsConnection } from "../connections"
import { Book, BookDetailsRequestType, Cover } from "../domain"
import { BookDetailsParser } from "../parsers"
import { DataProvider } from "./DataProvider"

export class BookDetailsProvider extends DataProvider<Book & any, BookDetailsRequestType> {

    constructor(private connection: IBookDetailsConnection, options?: BookDetailsRequestType) {
        super("BookDetailsProvider", options)
    }

    protected setInitialData() {
        return observable<Book>({
            _id: "",
            _ownerId: "",
            _createdOn: "",
            title: "",
            author: "",
            volume: "",
            publisher: "",
            yearOfRelease: "",
            pagesCount: "",
            cover: "" as Cover,
            coverImage: "",
        })
    }

    public setOptions(options: BookDetailsRequestType): this {
        const provider = new BookDetailsProvider(this.connection, options) as this
        provider.data = observable({
            _id: this.data._id,
        })
        return provider
    }

    public async fetch(): Promise<void> {
        if (!this.options) {
            return
        }

        try {
            const raw = await this.connection.getBook(this.options._id)
            const parser = new BookDetailsParser(raw)

            runInAction(() => {
                this.data = parser.data
            })
        } catch (err) {
            NotificationService.getInstance().notify("Book could not be loaded.", "error")
            throw err
        }
    }

    public async delete(): Promise<void> {
        if (!this.options) {
            return
        }

        try {
            await this.connection.deleteBook(this.options)

            runInAction(() => {
                this.data = this.setInitialData()
            })
        } catch (err) {
            NotificationService.getInstance().notify("Book could not be deleted.", "error")
            throw err
        }
    }
}