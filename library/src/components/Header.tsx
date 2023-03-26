import * as React from "react"
import styled from "styled-components"
import { BrowserRouter, Link } from "react-router-dom"
import { logo } from "../assets"
import { InnerWrap } from "./InnerWrap"

const StyledHeader = styled("header")`
background-color: #fff;
color: #fff;
`

const HeaderWrap = styled(InnerWrap)`
background-color: transparent;

&:after {
    display: block;
    content: "";
    clear: both;
}

.logo-link {
    display: inline-block;
    float: left;
    margin: 16px;
}

.nav-item {
    display: inline-flex;
    align-items: center;
    margin: 0 16px;
    height: 80px;
    vertical-align: middle;
}
`

const Nav = styled("nav")`
flex-grow: 1;
font-size: 18px;
text-align: end;
text-transform: uppercase;
font-weight: bold;
`

const Logo = styled("img")`
float: left;
`

export const Header: React.FunctionComponent = () => {
    return <BrowserRouter>
        <StyledHeader>
            <HeaderWrap>
                <Link className="logo-link" to="/">
                    <Logo src={logo} alt="bgreader logo" />
                </Link>
                <Nav>
                    <Link className="nav-item" to="/catalog">Catalog</Link>
                    <Link className="nav-item" to="/profile">Profile</Link>
                    <Link className="nav-item" to="/logout">Login</Link>
                    <Link className="nav-item" to="/login">Logout</Link>
                    <Link className="nav-item" to="/register">Register</Link>
                </Nav>
            </HeaderWrap>
        </StyledHeader>
    </BrowserRouter>
}
