import { computed } from "mobx"
import { UserData } from "../domain"
import { AuthProvider } from "./providers"

export class UserState {

    constructor(public readonly provider: AuthProvider) {
    }

    @computed get userData(): UserData {
        return this.provider.data
    }

    @computed get isAuthenticated() {
        return !!this.provider.data.jwt
    }

    onLogin() {
        this.provider.userLogin()
    }

    onRegister() {
        this.provider.userRegister()
    }

    onLogout() {
        this.provider.userLogout()
    }
}