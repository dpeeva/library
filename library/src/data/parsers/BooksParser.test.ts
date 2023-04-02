import { Book } from "../../domain"
import { BooksConnectionMockData } from "../mocks"
import { BooksParser } from "./BooksParser"

describe("BooksParser", () => {
    it("should parse payload", () => {
        const books: Book[] = [BooksConnectionMockData.data.books[0]]

        const parser = new BooksParser(
            JSON.stringify({ books: books, totalRows: books.length })
        )

        expect(parser.data.books).toEqual([
            {
                author: ["Лев Толстой"],
                coverImage: "https://kryg.eu/wp-content/uploads/2021/11/%D0%9A%D0%BE%D1%80%D0%B8%D1%86%D0%B0-%D0%A2%D0%BE%D0%BC-1-RGB-0-scaled.jpg",
                volume: 1,
                cover: "hardcover",
                id: 1,
                pagesCount: 516,
                publisher: [
                    "Кръг"
                ],
                title: "Война и мир",
                yearOfRelease: 2021
            }
        ])
        expect(parser.data.totalRows).toBe(1)
    })
})