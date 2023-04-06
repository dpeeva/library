import * as React from "react"
import { mui } from "./assets"
import { Routes, Route } from "react-router-dom"
import { StoreContext } from "./context"
import { BooksConnection, IBooksConnection, Store } from "./data"
import { Catalog, ContentWrap, Details, Header, Home, NotFound, Profile } from "./ui"
import { AjaxService } from "./services"
import { IUserConnection, UserConnection } from "./data/connections/UserConnection"

const Wrapper = mui.styled(mui.Box)(({ theme }) => ({
    minHeight: "100vh",
}))

export class App extends React.Component {
    private store: Store
    private readonly booksConnection: IBooksConnection
    private readonly userConnection: IUserConnection

    constructor(props: any) {
        super(props)
        const ajax = new AjaxService()
        const baseUrl = "http://localhost:3030"
        this.booksConnection = new BooksConnection(`${baseUrl}/books`, ajax)
        this.userConnection = new UserConnection(`${baseUrl}/users`, ajax)
        this.store = new Store(
            this.booksConnection,
            this.userConnection
        )
    }

    render() {
        return (
            <StoreContext.Provider value={this.store as Store}>
                <Wrapper data-testid="library-app">
                    <Header />
                    <ContentWrap data-testid="library-app-routes" maxWidth="xl">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/catalog" element={<Catalog />}></Route>
                            <Route path="/details" element={<Details />}></Route>
                            <Route path="/profile" element={<Profile />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                    </ContentWrap>
                </Wrapper >
            </StoreContext.Provider >
        )
    }
}
App.contextType = StoreContext