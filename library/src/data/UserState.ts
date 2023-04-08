import { action, computed, observable } from "mobx"
import { UserData, UserRequestType } from "../domain"
import { AuthProvider } from "./providers"

export class UserState {
    @observable public options: UserRequestType

    constructor(public readonly provider: AuthProvider) {

        this.options = observable({
            username: "",
            password: "",
            email: "",
            jwt: ""
        })
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
        return this.provider.data
    }

    @computed get isAuthenticated() {
        return !!this.provider.data.jwt
    }

    onLogin = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        const { username, password } = data

        const options = {
            username: username.toString(),
            password: password.toString(),
            email: username.toString(),
            jwt: ""
        }

        this.changeOptions(options)

        this.provider.userLogin()
    }

    onRegister = (e: any) => {
        e.preventDefault()
        this.provider.userRegister()
    }

    onLogout = () => {
        this.provider.userLogout()
    }
}