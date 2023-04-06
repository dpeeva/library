import { observable, runInAction } from "mobx"
import { UserData, UserRequestType } from "../../domain"
import { IUserConnection } from "../connections/UserConnection"
import { UserParser } from "../parsers"
import { NotificationService } from "../../utils"

export class AuthProvider {
    data: UserData
    options: UserRequestType

    constructor(private connection: IUserConnection, options?: UserRequestType) {
        this.data = this.setInitialData()
        this.options = options || {} as UserRequestType
    }

    setInitialData(): UserData {
        return observable<UserData>({
            _id: "",
            jwt: null,
            email: "",
            username: ""
        })
    }

    public async userLogin(): Promise<void> {
        try {
            const raw = await this.connection.login(this.options)
            const parser = new UserParser(raw)

            runInAction(() => {
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
        try {
            const raw = await this.connection.logout(this.options)
            const parser = new UserParser(raw)

            runInAction(() => {
                this.data.jwt = parser.data.jwt
                this.data.email = parser.data.email
                this.data.username = parser.data.username
            })
        } catch (err) {
            NotificationService.getInstance().notify("User logout failed.", "error")
            throw err
        }
    }

    public async userRegister(): Promise<void> {
        try {
            const raw = await this.connection.register(this.options)
            const parser = new UserParser(raw)

            runInAction(() => {
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