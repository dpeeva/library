import { BooksRequestType } from "../domain"
import { AjaxService } from "../../services"

export interface IBooksConnection {
    fetchAllBooks(request: BooksRequestType): Promise<string>
    fetchUserBooks(request: BooksRequestType): Promise<string>
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
        // TODO: Add params for pagination: ?${this.getParams(request)}
        // TODO: Add sorting
        // const sorting = "/?sortBy=_createdOn%20desc"
        const resp = await this.ajax.send(`${this.baseUrl}/data/books`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not fetch books: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    public async fetchUserBooks(request: BooksRequestType): Promise<string> {
        if (!request._ownerId) {
            return ""
        }

        const query = encodeURIComponent(`_ownerId="${request._ownerId}"`)

        const resp = await fetch(`${this.baseUrl}/data/books/?where=${query}`, {
            method: "GET",
        })
        const respText = await resp.text()

        if (!resp.ok) {
            throw new Error(`Could not fetch books for this user: ${resp.status} ${resp.text}`)
        }

        return respText
    }

    public async createBook(request: BooksRequestType): Promise<string> {
        if (!request.jwt) {
            return ""
        }

        const resp = await this.ajax.send(`${this.baseUrl}/data/books`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-Authorization": request.jwt,
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