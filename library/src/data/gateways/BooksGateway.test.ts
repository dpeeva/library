import { Book } from "../../domain"
import { BookConnectionMockData } from "../mocks"
import { BooksGateway } from "./BooksGateway"

describe("BooksGateway", () => {
    it("should parse payload", () => {
        const books: Book[] = [BookConnectionMockData.data.books[0]]

        const instance = new BooksGateway(
            JSON.stringify({ books: books, totalRows: books.length })
        )

        expect(instance.data.books).toEqual([
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
        expect(instance.data.totalRows).toBe(1)
    })
})