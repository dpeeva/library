import * as React from "react"
import { Navigate } from "react-router-dom"
import { StoreContext } from "../../context"

export const Logout = () => {
    const { bookStore, userState } = React.useContext(StoreContext)
    userState.onLogout()
    // TODO: check if we need to reset user data
    bookStore.changeOptions({
        _ownerId: "",
        userToken: ""
    })

    return <Navigate to="/" />
}