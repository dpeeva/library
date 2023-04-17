import { book } from "./BookDetailsConnectionMockData"
import { IBookDetailsConnection } from "../connections"
import { BookDetailsRequestType } from "../domain"

export class BookDetailsConnectionMock implements IBookDetailsConnection {

    public async getBook(id: string): Promise<string> {
        const data = book
        return JSON.stringify(data)
    }

    public async deleteBook(request: BookDetailsRequestType): Promise<string> {
        const data = ""
        return JSON.stringify(data)
    }

}