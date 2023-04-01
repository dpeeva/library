import { render, screen } from "@testing-library/react"
import { StoreContext } from "../../context"
import { BookConnectionMock, Store } from "../../data"
import { Catalog } from "./Catalog"

describe("Catalog page", () => {
    let store: Store
    beforeEach(() => {
        store = new Store(
            new BookConnectionMock(),
        )
        render(
            <StoreContext.Provider value={store}>
                <Catalog />
            </StoreContext.Provider>
        )
    })

    it("renders correctly", () => {
        expect(screen.getByTestId("library-app-catalog")).not.toBeNull()
        expect(screen.getByTestId("library-app-booklist")).not.toBeNull()
    })
})