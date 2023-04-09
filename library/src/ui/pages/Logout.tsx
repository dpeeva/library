import * as React from "react"
import { Navigate } from "react-router-dom"
import { StoreContext } from "../../context"

export const Logout = () => {
    const { bookStore, bookDetailsStore, userState } = React.useContext(StoreContext)
    userState.onLogout()
    // TODO: check if we need to reset user data
    bookStore.changeOptions({
        _ownerId: "",
        jwt: ""
    })
    bookDetailsStore.changeOptions({
        jwt: ""
    })

    return <Navigate to="/" />
}