import * as React from "react"
import { NavLink } from "react-router-dom"
import { logo, mui } from "../assets"
import { StoreContext } from "../context"

const Link = mui.styled(NavLink)(({ theme }) => ({
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
        backgroundColor: theme.palette.warning.light,
        transition: "transform 0.3s ease",
        transform: "scaleX(0)",
    },

    "&:hover": {
        color: theme.palette.warning.dark,
        "&:after": {
            transform: "scaleX(1)",
        }
    },

    "&.active": {
        color: theme.palette.warning.dark,
    },
}))

const Logo = mui.styled("img")({})

export class Header extends React.Component {
    render() {
        return <mui.AppBar
            data-testid="library-header"
            position="sticky"
            color={"default"}
        >
            <mui.Container maxWidth="xl">
                <mui.Toolbar disableGutters>
                    <NavLink to="/">
                        <Logo src={logo} alt="bgreader logo" width={"160px"} />
                    </NavLink>
                    <mui.Stack direction={"row"} component={"nav"} sx={{
                        display: "flex",
                        flexGrow: 1,
                        justifyContent: "end"
                    }}>
                        <Link className={({ isActive }) => isActive ? "active" : ""} to="/catalog">Catalog</Link>
                        <Link className={({ isActive }) => isActive ? "active" : ""} to="/profile">Profile</Link>
                        <Link className={({ isActive }) => isActive ? "active" : ""} to="/login">Login</Link>
                        <Link className={({ isActive }) => isActive ? "active" : ""} to="/register">Register</Link>
                        <Link className={({ isActive }) => isActive ? "active" : ""} to="/logout">Logout</Link>
                    </mui.Stack>
                </mui.Toolbar>
            </mui.Container>
        </mui.AppBar>
    }
}
Header.contextType = StoreContext