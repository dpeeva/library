import { BookStore } from "./BookStore"
import { IBooksConnection } from "./connections"
import { IUserConnection } from "./connections/UserConnection"
import { AuthProvider, BooksProvider } from "./providers"
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

        const authProvider = new AuthProvider(userConnection)
        this.userState = new UserState(authProvider)
    }
}