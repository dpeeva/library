import * as React from "react"
import { AuthContext } from "../context/AuthContext"
import { UserState } from "../data/UserState"

export const AuthProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
    <AuthContext.Provider value={new UserState()}>
        {children}
    </AuthContext.Provider>
)