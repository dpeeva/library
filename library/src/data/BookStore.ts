import { computed } from "mobx"
import { Book } from "../domain"
import { BookConnectionMockData } from "./mocks"
import { BookStream } from "./streams"

export class BookStore {
    constructor(public readonly booksStream: BookStream) {
    }

    @computed get books(): Book[] {
        return this.booksStream.data.length
            ? this.booksStream.data
            : BookConnectionMockData.data.books // TODO: use real data
    }
}