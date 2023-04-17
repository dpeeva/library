import { BookStore } from "./BookStore"
import { IBookDetailsConnection, IBooksConnection, IUserConnection } from "./connections"
import { authProviderFactory, bookDetailsProviderFactory, booksProviderFactory, userBooksProviderFactory } from "./providers"
import { UserState } from "./UserState"

export class Store {
    public readonly bookStore: BookStore
    public readonly userState: UserState

    constructor(
        booksConnection: IBooksConnection,
        bookDetailsConnection: IBookDetailsConnection,
        userConnection: IUserConnection
    ) {
        this.bookStore = new BookStore(
            booksProviderFactory(booksConnection),
            bookDetailsProviderFactory(bookDetailsConnection),
            userBooksProviderFactory(booksConnection)
        )

        this.userState = new UserState(
            authProviderFactory(userConnection)
        )
    }
}