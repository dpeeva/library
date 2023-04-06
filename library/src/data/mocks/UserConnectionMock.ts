import { UserRequestType } from "../../domain"
import { IUserConnection } from "../connections/UserConnection"
import { UserConnectionMockData } from "./UserConnectionMockData"

export class UserConnectionMock implements IUserConnection {

    public async login(request: UserRequestType) {
        const data = UserConnectionMockData.data
        return JSON.stringify(data)
    }

    public async logout(request: UserRequestType) {
        return JSON.stringify({})
    }

    public async register(request: UserRequestType) {
        return JSON.stringify({})
    }
}