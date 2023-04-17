import { BookDetailsRequestType } from "../domain"
import { IBookDetailsConnection } from "../connections"
import { BookDetailsProvider } from "./BookDetailsProvider"

export const bookDetailsProviderFactory = (connection: IBookDetailsConnection) => {
    return (options: BookDetailsRequestType): BookDetailsProvider => new BookDetailsProvider(connection, options)
}