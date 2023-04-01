import { IObservableArray, observable, runInAction } from "mobx"
import { Book, BooksRequestType } from "../../domain"
import { NotificationService } from "../../utils"
import { IBookConnection } from "../connections"
import { BooksGateway } from "../gateways"

export class BookStream {
    data: IObservableArray<Book>

    constructor(private connection: IBookConnection) {
        this.data = this.setInitialData()
    }

    protected setInitialData(): IObservableArray<Book> {
        return observable([])
    }

    public async fetch(): Promise<void> {
        try {
            const raw = await this.connection.fetchAllBooks({} as BooksRequestType)
            const gateway = new BooksGateway(raw)

            runInAction(() => {
                this.data.replace(gateway.data.books)
            })
        } catch (err) {
            NotificationService.getInstance().notify("Books could not be loaded.", "error")
            throw err
        }
    }
}