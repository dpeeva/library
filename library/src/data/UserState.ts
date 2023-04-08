import { action, computed, observable } from "mobx"
import { UserData, UserRequestType } from "../domain"
import { AuthProvider } from "./providers"

export class UserState {
    @observable public options: UserRequestType
    @observable public authProvider: AuthProvider

    constructor(
        private readonly authProviderFactory: (options: UserRequestType) => AuthProvider
    ) {
        this.options = observable({
            username: "",
            password: "",
            email: "",
            jwt: ""
        })
        this.authProvider = this.authProviderFactory(this.userOptions)
    }

    @computed get userOptions() {
        return {
            username: this.options.username,
            password: "",
            email: "",
            jwt: ""
        }
    }

    @action
    public changeOptions(options: Partial<UserRequestType>) {
        Object.assign(this.options, options)
    }

    @computed get userData(): UserData {
        return this.authProvider.data
    }

    @computed get isAuthenticated() {
        return !!this.authProvider.data.jwt
    }

    onLogin = async () => {
        this.authProvider = this.authProvider.setOptions(this.options)
        await this.authProvider.userLogin()
    }

    onRegister = async () => {
        this.authProvider.userRegister()
    }

    onLogout = async () => {
        this.authProvider.userLogout()
    }
}