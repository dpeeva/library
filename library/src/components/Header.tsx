import * as React from "react"
import { Link } from "react-router-dom"
import { logo, mui } from "../assets"

const NavLink = mui.styled(Link)(({ theme }) => ({
    position: "relative",
    padding: "16px",
    fontWeight: "bold",
    color: theme.palette.grey[800],
    textDecoration: "none",

    "&:after": {
        display: "block",
        content: "''",
        position: "absolute",
        bottom: "7px",
        left: "0",
        width: "100%",
        height: "2px",
        backgroundColor: theme.palette.secondary.light,
        transition: "transform 0.3s ease",
        transform: "scaleX(0)",
    },

    "&:hover": {
        color: theme.palette.secondary.dark,
        "&:after": {
            transform: "scaleX(1)",
        }
    }
}))

const Logo = mui.styled("img")`
`

export const Header: React.FunctionComponent = () => {
    return <mui.AppBar
        data-testid="library-header"
        position="sticky"
        color={"default"}
    >
        <mui.Container maxWidth="xl">
            <mui.Toolbar disableGutters>
                <Link to="/">
                    <Logo src={logo} alt="bgreader logo" width={"160px"} />
                </Link>
                <mui.Stack direction={"row"} component={"nav"} sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "end"
                }}>
                    <NavLink to="/catalog">Catalog</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </mui.Stack>
            </mui.Toolbar>
        </mui.Container>
    </mui.AppBar>
}
