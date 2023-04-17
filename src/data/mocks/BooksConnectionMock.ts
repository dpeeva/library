import { BooksRequestType } from "../domain"
import { IBooksConnection } from "../connections"
import { BooksConnectionMockData } from "./BooksConnectionMockData"

export class BooksConnectionMock implements IBooksConnection {

    public async fetchAllBooks(request: BooksRequestType): Promise<string> {
        const data = BooksConnectionMockData.data.books[Number(request._id) || 0] // TODO: add check for invalid id
        return JSON.stringify(data)
    }

    public async fetchUserBooks(request: BooksRequestType): Promise<string> {
        return JSON.stringify([])
    }

    public async createBook(request: BooksRequestType): Promise<string> {
        const data = BooksConnectionMockData.data.books[0]
        return JSON.stringify(data)
    }

    public async editBook(request: BooksRequestType): Promise<string> {
        const data = {
            ...BooksConnectionMockData.data.books[0],
            title: "Edited Title"
        }
        return JSON.stringify(data)
    }
}