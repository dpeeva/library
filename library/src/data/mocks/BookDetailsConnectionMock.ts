import { book } from "./BookDetailsConnectionMockData"
import { IBookDetailsConnection } from "../connections"

export class BookDetailsConnectionMock implements IBookDetailsConnection {

    public async fetchById(id: string): Promise<string> {
        const data = book
        return JSON.stringify(data)
    }
}