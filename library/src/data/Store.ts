import { computed } from "mobx"
import { Book } from "../domain"
import { BookStore } from "./BookStore"
import { IBooksConnection } from "./connections"
import { IUserConnection } from "./connections/UserConnection"
import { authProviderFactory, BooksProvider } from "./providers"
import { UserState } from "./UserState"

export class Store {
    public readonly bookStore: BookStore
    public readonly userState: UserState

    constructor(
        booksConnection: IBooksConnection,
        userConnection: IUserConnection
    ) {
        const booksProvider = new BooksProvider(booksConnection)
        this.bookStore = new BookStore(booksProvider)

        this.userState = new UserState(
            authProviderFactory(userConnection)
        )
    }

    @computed get books(): Book[] {
        return this.bookStore.books
    }
}