import { BooksRequestType } from "../../domain"
import { AjaxService } from "../../services"

export interface IBooksConnection {
    fetchAllBooks(request: BooksRequestType): Promise<string>
}

export class BooksConnection implements IBooksConnection {

    constructor(
        public readonly baseUrl: string,
        private readonly ajax: AjaxService = new AjaxService()
    ) {
        this.baseUrl = baseUrl
    }

    public async fetchAllBooks(request: BooksRequestType): Promise<string> {
        const resp = await this.ajax.send(`${this.baseUrl}?${this.getParams(request)}`)
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not fetch books: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    getParams(request: BooksRequestType) {
        const params = new URLSearchParams()
        request.id && params.append("id", request.id.toString())
        params.append("Page", request.pagination.page.toString())
        params.append("PageSize", request.pagination.pageSize.toString())
        return params.toString()
    }
}