import { BooksRequestType } from "../domain"
import { IBooksConnection } from "../connections"
import { BooksProvider } from "./BooksProvider"

export const booksProviderFactory = (connection: IBooksConnection) => {
    return (options: BooksRequestType): BooksProvider => new BooksProvider(connection, options)
}