import { AjaxService } from "../../services"

export interface IBookDetailsConnection {
    fetchById(id: string): Promise<string>
}

export class BookDetailsConnection implements IBookDetailsConnection {

    constructor(
        public readonly baseUrl: string,
        private readonly ajax: AjaxService = new AjaxService()
    ) {
        this.baseUrl = baseUrl
    }

    public async fetchById(id: string): Promise<string> {
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
}