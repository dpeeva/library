import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header, InnerWrap } from "./components"
import { Catalog, Details, Home, NotFound, Profile } from "./pages"

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <InnerWrap>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/catalog" element={<Catalog />}></Route>
                        <Route path="/details" element={<Details />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </InnerWrap>
            </BrowserRouter>
        </div >
    )
}

export default App
