import { book } from "./BookDetailsConnectionMockData"
import { IBookDetailsConnection } from "../connections"
import { BookDetailsRequestType } from "../domain"

export class BookDetailsConnectionMock implements IBookDetailsConnection {

    public async getById(id: string): Promise<string> {
        const data = book
        return JSON.stringify(data)
    }

    public async deleteById(request: BookDetailsRequestType): Promise<string> {
        const data = ""
        return JSON.stringify(data)
    }

}