import { UserRequestType } from "../../domain"
import { AjaxService } from "../../services"

export interface IUserConnection {
    login(request: UserRequestType): Promise<string>
    logout(request: UserRequestType): Promise<string>
    register(request: UserRequestType): Promise<string>
}

export class UserConnection implements IUserConnection {

    constructor(
        public readonly baseUrl: string,
        private readonly ajax: AjaxService = new AjaxService()
    ) {
        this.baseUrl = baseUrl
    }

    public async login(request: UserRequestType): Promise<string> {
        const resp = await this.ajax.send(`${this.baseUrl}/users/login`, {
            method: "POST",
            body: JSON.stringify(request)
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not login: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    public async logout(request: UserRequestType): Promise<string> {
        const resp = await this.ajax.send(`${this.baseUrl}/users/logout`, {
            method: "POST",
            body: JSON.stringify(request)
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not logout: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    public async register(request: UserRequestType): Promise<string> {
        const resp = await this.ajax.send(`${this.baseUrl}/users/register`, {
            method: "POST",
            body: JSON.stringify(request)
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not login: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    getParams(request: UserRequestType) {
        const params = new URLSearchParams()
        params.append("username", request.username)
        params.append("email", request.email)
        params.append("password", request.password)
        return params.toString()
    }
}