import { UserRequestType } from "../../domain"
import { IUserConnection } from "../connections"
import { AuthProvider } from "./AuthProvider"

export const authProviderFactory = (connection: IUserConnection) => {
    return (options: UserRequestType): AuthProvider => new AuthProvider(connection, options)
}