import { action, computed, observable } from "mobx"
import { UserData, UserRequestType } from "./domain"
import { AuthProvider } from "./providers"

export class UserState {
    @observable public options: UserRequestType
    @observable public authProvider: AuthProvider

    constructor(
        private readonly authProviderFactory: (options: UserRequestType) => AuthProvider
    ) {
        this.options = observable({
            _id: "",
            username: "",
            password: "",
            passwordRepeated: "",
            email: "",
            jwt: ""
        })
        this.authProvider = this.authProviderFactory(this.userOptions)
    }

    @computed get userOptions() {
        return {
            _id: this.options._id,
            username: this.options.username,
            password: this.options.password,
            email: this.options.email,
            jwt: this.options.jwt
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

    @action isOwner(ownerId: string): boolean {
        return this.authProvider.data._id === ownerId
    }

    onLogin = async () => {
        this.authProvider = this.authProvider.setOptions(this.options)
        await this.authProvider.userLogin()
        this.changeOptions({
            _id: this.authProvider.data._id,
            jwt: this.authProvider.data.jwt,
        })
    }

    onRegister = async () => {
        // TODO: Add validation for password and email
        this.authProvider = this.authProvider.setOptions(this.options)
        this.authProvider.userRegister()
        this.changeOptions({
            jwt: this.authProvider.data.jwt,
        })
    }

    onLogout = async () => {
        await this.authProvider.userLogout()
    }
}