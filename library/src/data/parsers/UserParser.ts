import { UserData } from "../domain"

export class UserParser {
    public data: UserData

    constructor(response: string) {
        const parsedResponse = JSON.parse(response)

        this.data = {
            _id: parsedResponse._id,
            jwt: parsedResponse.accessToken,
            email: parsedResponse.email,
            username: parsedResponse.email,
        }
    }
}