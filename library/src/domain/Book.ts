export interface Book {
    id: number
    title: string
    author: string[]
    volume?: number
    publisher: string[]
    yearOfRelease: number
    pagesCount: number
    cover: "softcover" | "hardcover",
    coverImage?: string
}