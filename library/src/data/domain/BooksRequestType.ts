/* istanbul ignore file */

import { Cover } from "./Book"
// import { Pagination } from "./Pagination"

export type BooksRequestType = {
    jwt?: string
    _ownerId?: string
    _id?: string
    title?: string
    author?: string
    volume?: string
    publisher?: string
    yearOfRelease?: string
    pagesCount?: string
    cover?: Cover | string
    coverImage?: string
    // pagination: Pagination
}