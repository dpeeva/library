import { BooksRequestType } from "../domain"
import { IBookDetailsConnection } from "../connections"
import { BookDetailsProvider } from "./BookDetailsProvider"

export const bookDetailsProviderFactory = (connection: IBookDetailsConnection) => {
    return (options: BooksRequestType): BookDetailsProvider => new BookDetailsProvider(connection, options)
}