import * as React from "react"
import { mui } from "./assets"
import { Routes, Route } from "react-router-dom"
import { ContentWrap, Header } from "./components"
import { Catalog, Details, Home, NotFound, Profile } from "./pages"

const Wrapper = mui.styled(mui.Box)(({ theme }) => ({
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[700],
}))

function App() {
    return (
        <Wrapper data-testid="library-app">
            <Header />
            <ContentWrap maxWidth="xl" data-testid="library-routes" >
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/catalog" element={<Catalog />}></Route>
                    <Route path="/details" element={<Details />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </ContentWrap>
        </Wrapper >
    )
}

export default App
