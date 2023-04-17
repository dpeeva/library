import { book } from "./BookDetailsConnectionMockData"
import { IBookDetailsConnection } from "../connections"
import { BooksRequestType } from "../domain"

export class BookDetailsConnectionMock implements IBookDetailsConnection {

    public async getBook(id: string): Promise<string> {
        const data = book
        return JSON.stringify(data)
    }

    public async deleteBook(request: BooksRequestType): Promise<string> {
        const data = ""
        return JSON.stringify(data)
    }

}