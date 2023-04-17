import { BookStore } from "./BookStore"
import { BookDetailsStore } from "./BookDetailsStore"
import { IBookDetailsConnection, IBooksConnection, IUserConnection } from "./connections"
import { authProviderFactory, bookDetailsProviderFactory, booksProviderFactory, userBooksProviderFactory } from "./providers"
import { UserState } from "./UserState"

export class Store {
    public readonly bookStore: BookStore
    public readonly bookDetailsStore: BookDetailsStore
    public readonly userState: UserState

    constructor(
        booksConnection: IBooksConnection,
        bookDetailsConnection: IBookDetailsConnection,
        userConnection: IUserConnection
    ) {
        this.bookStore = new BookStore(
            booksProviderFactory(booksConnection),
            userBooksProviderFactory(booksConnection)
        )

        this.bookDetailsStore = new BookDetailsStore(
            bookDetailsProviderFactory(bookDetailsConnection)
        )

        this.userState = new UserState(
            authProviderFactory(userConnection)
        )
    }
}