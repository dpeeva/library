import { observable, runInAction } from "mobx"
import { UserData, UserRequestType } from "../../domain"
import { NotificationService } from "../../utils"
import { IUserConnection } from "../connections/UserConnection"
import { UserParser } from "../parsers"
import { DataProvider } from "./DataProvider"

export class AuthProvider extends DataProvider<UserData & any, UserRequestType> {

    constructor(private connection: IUserConnection, options?: UserRequestType) {
        super("AuthProvider", options)
    }

    protected setInitialData(): UserData {
        return observable<UserData>({
            _id: "",
            jwt: null,
            email: "",
            username: "",
        })
    }

    public setOptions(options: UserRequestType): this {
        return new AuthProvider(this.connection, options) as this
    }

    public async fetch(): Promise<void> {
        //
    }

    public async userLogin(): Promise<void> {
        if (!this.options) {
            return
        }

        try {
            const raw = await this.connection.login(this.options)
            const parser = new UserParser(raw)

            runInAction(() => {
                this.data._id = parser.data._id
                this.data.jwt = parser.data.jwt
                this.data.email = parser.data.email
                this.data.username = parser.data.username
            })
        } catch (err) {
            NotificationService.getInstance().notify("User login failed.", "error")
            throw err
        }
    }

    public async userLogout(): Promise<void> {
        if (!this.options) {
            return
        }

        try {
            const raw = await this.connection.logout(this.options)

            runInAction(() => {
                this.data._id = ""
                this.data.jwt = ""
                this.data.email = ""
                this.data.username = ""
            })
        } catch (err) {
            NotificationService.getInstance().notify("User logout failed.", "error")
            throw err
        }
    }

    public async userRegister(): Promise<void> {
        if (!this.options) {
            return
        }

        try {
            const raw = await this.connection.register(this.options)
            const parser = new UserParser(raw)

            runInAction(() => {
                this.data._id = parser.data._id
                this.data.jwt = parser.data.jwt
                this.data.email = parser.data.email
                this.data.username = parser.data.username
            })
        } catch (err) {
            NotificationService.getInstance().notify("User registration failed.", "error")
            throw err
        }
    }
}