import { BooksRequestType } from "../../domain"
import { AjaxService } from "../../services"

export interface IBooksConnection {
    fetchAllBooks(request: BooksRequestType): Promise<string>
    createBook(request: BooksRequestType): Promise<string>
}

export class BooksConnection implements IBooksConnection {

    constructor(
        public readonly baseUrl: string,
        private readonly ajax: AjaxService = new AjaxService()
    ) {
        this.baseUrl = baseUrl
    }

    public async fetchAllBooks(request: BooksRequestType): Promise<string> {
        const resp = await this.ajax.send(`${this.baseUrl}/data/books?${this.getParams(request)}`)
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not fetch books: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    public async createBook(request: BooksRequestType): Promise<string> {
        if (!request.userToken) {
            return ""
        }

        const resp = await this.ajax.send(`${this.baseUrl}/data/books`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-Authorization": request.userToken,
            },
            body: JSON.stringify({
                title: request.title,
                author: request.author,
                volume: request.volume,
                publisher: request.publisher,
                yearOfRelease: request.yearOfRelease,
                pagesCount: request.pagesCount,
                cover: request.cover,
                coverImage: request.coverImage,
            })
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not create book: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    getParams(request: BooksRequestType) {
        const params = new URLSearchParams()
        request._id && params.append("_id", request._id.toString())
        // params.append("Page", request.pagination.page.toString())
        // params.append("PageSize", request.pagination.pageSize.toString())
        return params.toString()
    }
}