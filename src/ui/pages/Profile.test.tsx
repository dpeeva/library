import { render, screen } from "@testing-library/react"
import { StoreContext } from "../../context"
import { BooksConnectionMock, Store, UserConnectionMock } from "../../data"
import { Profile } from "./Profile"

describe("Profile page", () => {
    let store: Store
    beforeEach(() => {
        store = new Store(
            new BooksConnectionMock(),
            new UserConnectionMock()
        )
        render(
            <StoreContext.Provider value={store}>
                <Profile />
            </StoreContext.Provider>
        )
    })

    it("renders correctly", () => {
        expect(screen.getByTestId("library-app-profile")).not.toBeNull()
    })
})