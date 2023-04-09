import { AjaxService } from "../../services"
import { BookDetailsRequestType } from "../domain"

export interface IBookDetailsConnection {
    getById(id: string): Promise<string>
    deleteById(request: BookDetailsRequestType): Promise<string>
}

export class BookDetailsConnection implements IBookDetailsConnection {

    constructor(
        public readonly baseUrl: string,
        private readonly ajax: AjaxService = new AjaxService()
    ) {
        this.baseUrl = baseUrl
    }

    public async getById(id: string): Promise<string> {
        const resp = await this.ajax.send(`${this.baseUrl}/data/books/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not fetch book data: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    public async deleteById(request: BookDetailsRequestType): Promise<string> {
        if (!request.jwt) {
            return ""
        }
        const resp = await fetch(`${this.baseUrl}/data/books/${request._id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "X-Authorization": request.jwt
            },
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not fetch book data: ${resp.status} ${resp.text}`)
        }

        return respText
    }
}