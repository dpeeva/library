import { BooksRequestType } from "../domain"
import { IBooksConnection } from "../connections"
import { UserBooksProvider } from "./UserBooksProvider"

export const userBooksProviderFactory = (connection: IBooksConnection) => {
    return (options: BooksRequestType): UserBooksProvider => new UserBooksProvider(connection, options)
}