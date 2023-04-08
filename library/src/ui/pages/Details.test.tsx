import { render, screen } from "@testing-library/react"
import { StoreContext } from "../../context"
import { BookDetailsConnectionMock, BooksConnectionMock, Store, UserConnectionMock } from "../../data"
import { Details } from "./Details"

describe("Details page", () => {
    let store: Store
    beforeEach(() => {
        store = new Store(
            new BooksConnectionMock(),
            new BookDetailsConnectionMock(),
            new UserConnectionMock()
        )
        render(
            <StoreContext.Provider value={store}>
                <Details />
            </StoreContext.Provider>
        )
    })

    it("renders correctly", () => {
        expect(screen.getByTestId("library-app-details")).not.toBeNull()
    })
})