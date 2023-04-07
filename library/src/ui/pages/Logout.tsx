import * as React from "react"
import { Navigate } from "react-router-dom"
import { StoreContext } from "../../context"

export const Logout = () => {
    const { userState } = React.useContext(StoreContext)
    userState.onLogout()

    return <Navigate to="/" />
}