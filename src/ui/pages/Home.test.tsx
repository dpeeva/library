import { render, screen } from "@testing-library/react"
import { StoreContext } from "../../context"
import { BookDetailsConnectionMock, BooksConnectionMock, Store, UserConnectionMock } from "../../data"
import { Home } from "./Home"

describe("Home page", () => {
    let store: Store
    beforeEach(() => {
        store = new Store(
            new BooksConnectionMock(),
            new BookDetailsConnectionMock(),
            new UserConnectionMock()
        )
        render(
            <StoreContext.Provider value={store}>
                <Home />
            </StoreContext.Provider>
        )
    })

    it("renders correctly", () => {
        expect(screen.getByTestId("library-app-home")).not.toBeNull()
        expect(screen.getByTestId("library-app-booklist")).not.toBeNull()
    })
})