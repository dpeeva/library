import { render, screen } from "@testing-library/react"
import { StoreContext } from "../../context"
import { BookConnectionMock, Store } from "../../data"
import { NotFound } from "./NotFound"

describe("NotFound page", () => {
    let store: Store
    beforeEach(() => {
        store = new Store(
            new BookConnectionMock(),
        )
        render(
            <StoreContext.Provider value={store}>
                <NotFound />
            </StoreContext.Provider>
        )
    })

    it("renders correctly", () => {
        expect(screen.getByTestId("library-app-404")).not.toBeNull()
    })
})