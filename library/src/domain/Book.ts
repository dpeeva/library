/* istanbul ignore file */

export type Cover = "softcover" | "hardcover"

export interface Book {
    _id: string
    _ownerId: string
    _createdOn: string
    title: string
    author: string
    volume?: string
    publisher: string
    yearOfRelease: string
    pagesCount: string
    cover: Cover
    coverImage?: string
}