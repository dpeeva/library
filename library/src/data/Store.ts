import { computed } from "mobx"
import { Book } from "../domain"
import { BookStore } from "./BookStore"
import { IBooksConnection } from "./connections"
import { IUserConnection } from "./connections/UserConnection"
import { authProviderFactory, booksProviderFactory } from "./providers"
import { UserState } from "./UserState"

export class Store {
    public readonly bookStore: BookStore
    public readonly userState: UserState

    constructor(
        booksConnection: IBooksConnection,
        userConnection: IUserConnection
    ) {
        this.bookStore = new BookStore(
            booksProviderFactory(booksConnection)
        )

        this.userState = new UserState(
            authProviderFactory(userConnection)
        )
    }

    @computed get books(): Book[] {
        return this.bookStore.books
    }
}