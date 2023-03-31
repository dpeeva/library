import { AjaxService } from "./AjaxService"

describe("AjaxService", () => {

    let ajax: AjaxService

    beforeEach(() => {
        window.fetch = jest.fn().mockReturnValue(Promise.resolve())
        ajax = new AjaxService()
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
    })

    it("sends request via fetch", () => {
        const result = ajax.send("mock.com")

        return result.then(() => {
            expect(result instanceof Promise).toEqual(true)
            expect(fetch).toHaveBeenCalledTimes(1)
        })
    })
})