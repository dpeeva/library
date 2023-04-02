import { BooksRequestType } from "../../domain"
import { IBooksConnection } from "../connections"
import { BooksConnectionMockData } from "./BooksConnectionMockData"

export class BooksConnectionMock implements IBooksConnection {

    public async fetchAllBooks(request: BooksRequestType): Promise<string> {
        const data = BooksConnectionMockData.data.books[request.id || 0] // TODO: add check for invalid id
        return JSON.stringify(data)
    }

}