import * as React from "react"
import { mui } from "./assets"
import { Routes, Route } from "react-router-dom"
import { StoreContext } from "./context"
import { BookConnection, IBookConnection, Store } from "./data"
import { Catalog, ContentWrap, Details, Header, Home, NotFound, Profile } from "./ui"
import { AjaxService } from "./services"

const Wrapper = mui.styled(mui.Box)(({ theme }) => ({
    minHeight: "100vh",
}))

export class App extends React.Component {
    private store?: Store
    private readonly bookConnection: IBookConnection

    constructor(props: any) {
        super(props)
        const ajax = new AjaxService()
        this.bookConnection = new BookConnection("http://127.0.0.1/api/books", ajax)
        this.store = new Store(
            this.bookConnection
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