import { toJS } from "mobx"
import { NotificationService } from "../../utils"
import { BookConnectionMock, BookConnectionMockData } from "../mocks"
import { BooksProvider } from "./BooksProvider"

describe("BookStream", () => {
    let connection: BookConnectionMock
    let instance: BooksProvider

    beforeEach(() => {
        connection = new BookConnectionMock()
        connection.fetchAllBooks = jest.fn(connection.fetchAllBooks)
        instance = new BooksProvider(connection, {
            pagination: {
                page: 1,
                pageSize: 50
            }
        })
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it("should have empty data initially", () => {
        expect(toJS(instance.data)).toEqual({
            books: [],
            totalRows: 0,
        })
    })

    it("should return empty data when no options are passed", async () => {
        instance = new BooksProvider(connection, undefined)
        const result = await instance.fetch()
        expect(result).toBeUndefined()
    })

    it("should replace data on fetch", async () => {
        instance = new BooksProvider(connection, {
            pagination: {
                page: 1,
                pageSize: 50
            }
        })
        await instance.fetch()
        expect(instance.data.books).toEqual(BookConnectionMockData.data.books)
        expect(instance.data.totalRows).toEqual(BookConnectionMockData.data.totalRows)
    })

    it("should throw an error on fetch", async () => {
        NotificationService.getInstance().notify = jest.fn()
        instance.data.books.replace = jest.fn(instance.data.books.replace)
        connection.fetchAllBooks = () => { throw new Error() }

        await expect(instance.fetch()).rejects.toThrow()
        expect(instance.data.books.replace).toHaveBeenCalledTimes(0)
        expect(NotificationService.getInstance().notify).toHaveBeenCalled()
    })
})