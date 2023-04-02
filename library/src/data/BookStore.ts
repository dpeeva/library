import { computed } from "mobx"
import { Book } from "../domain"
import { BookConnectionMockData } from "./mocks"
import { BooksProvider } from "./providers"

export class BookStore {
    constructor(public readonly provider: BooksProvider) {
    }

    @computed get books(): Book[] {
        return this.provider.data.books.length
            ? this.provider.data.books
            : BookConnectionMockData.data.books // TODO: use real data
    }
}