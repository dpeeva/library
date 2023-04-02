import { AjaxService } from "../../services"
import { BooksConnection } from "./BooksConnection"

describe("BooksConnection", () => {
    let instance: BooksConnection
    let url: string
    let response: {
        ok: boolean
        status: number
        text: string
        json: any
    }
    let ajax: AjaxService

    beforeEach(() => {
        url = "mock.com"
        response = {
            ok: true,
            text: JSON.stringify([]),
            json: {},
            status: 200,
        }

        ajax = {
            send: jest.fn(() => Promise.resolve({
                ok: response.ok,
                text: () => Promise.resolve(response.text),
                json: () => Promise.resolve(response.json),
                status: response.status
            })) as any,
            addGlobalHeaders: jest.fn()
        } as any

        instance = new BooksConnection(url, ajax)
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("fetchAllBooks returns data", async () => {
        response.ok = true

        const result = await instance.fetchAllBooks({
            id: 1,
            pagination: {
                page: 1,
                pageSize: 15
            }
        })

        expect(ajax.send).toHaveBeenCalledTimes(1)
        expect(ajax.send).toHaveBeenCalledWith(`${url}?id=1&Page=1&PageSize=15`)
        expect(result).toBe("[]")
    })

    it("fetchAllBooks called to throw", async () => {
        response.ok = false
        response.status = 500

        try {
            await instance.fetchAllBooks({
                pagination: {
                    page: 1,
                    pageSize: 15
                }
            })
        } catch (err) {
            expect(err instanceof Error).toEqual(true)
        }
    })
})