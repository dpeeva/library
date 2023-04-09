import { book } from "./BookDetailsConnectionMockData"
import { IBookDetailsConnection } from "../connections"

export class BookDetailsConnectionMock implements IBookDetailsConnection {

    public async getById(id: string): Promise<string> {
        const data = book
        return JSON.stringify(data)
    }
}