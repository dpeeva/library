import { UserData } from "../../domain"

export class UserParser {
    public data: UserData

    constructor(response: string) {
        const parsedResponse = JSON.parse(response)

        this.data = {
            _id: parsedResponse._id,
            jwt: parsedResponse.jwt,
            email: parsedResponse.email,
            username: parsedResponse.username,
            password: parsedResponse.password
        }
    }
}