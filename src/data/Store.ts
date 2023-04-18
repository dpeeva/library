import { BookStore } from "./BookStore"
import { IBooksConnection, IUserConnection } from "./connections"
import { authProviderFactory, booksProviderFactory, userBooksProviderFactory } from "./providers"
import { UserState } from "./UserState"

export class Store {
    public readonly bookStore: BookStore
    public readonly userState: UserState

    constructor(
        booksConnection: IBooksConnection,
        userConnection: IUserConnection
    ) {
        this.bookStore = new BookStore(
            booksProviderFactory(booksConnection),
            userBooksProviderFactory(booksConnection)
        )

        this.userState = new UserState(
            authProviderFactory(userConnection)
        )
    }
}