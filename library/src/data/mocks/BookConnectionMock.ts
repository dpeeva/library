import { BooksRequestType } from "../../domain"
import { IBookConnection } from "../connections"
import { BookConnectionMockData } from "./BookConnectionMockData"

export class BookConnectionMock implements IBookConnection {

    public async fetchAllBooks(request: BooksRequestType): Promise<string> {
        const data = BookConnectionMockData.data.books[request.id || 0] // TODO: add check for invalid id
        return JSON.stringify(data)
    }

}