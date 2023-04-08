import * as React from "react"
import { mui } from "./assets"
import { Routes, Route } from "react-router-dom"
import { StoreContext } from "./context"
import { BooksConnection, IBooksConnection, Store } from "./data"
import { Catalog, ContentWrap, Details, Header, Home, Login, Logout, NotFound, Profile, Register } from "./ui"
import { AjaxService } from "./services"
import { IUserConnection, UserConnection } from "./data/connections/UserConnection"
import "./App.css"

const Wrapper = mui.styled(mui.Box)({
    minHeight: "100vh",
})

export class App extends React.Component {
    private store?: Store
    private readonly booksConnection: IBooksConnection
    private readonly userConnection: IUserConnection

    constructor(props: any) {
        super(props)
        const ajax = new AjaxService()
        const baseUrl = "http://localhost:3030"
        this.booksConnection = new BooksConnection(`${baseUrl}`, ajax)
        this.userConnection = new UserConnection(`${baseUrl}`, ajax)
        this.store = undefined
        this.init()
    }

    async init(): Promise<void> {
        this.store = new Store(
            this.booksConnection,
            this.userConnection
        )
        // await this.store.bookStore.booksProvider.fetch()
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
                            <Route path="/catalog/:id" element={<Details />}></Route>
                            <Route path="/profile" element={<Profile />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/logout" element={<Logout />}></Route>
                            <Route path="/register" element={<Register />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Routes>
                    </ContentWrap>
                </Wrapper >
            </StoreContext.Provider >
        )
    }
}
App.contextType = StoreContext