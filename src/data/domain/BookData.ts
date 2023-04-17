/* istanbul ignore file */

import { IObservableArray } from "mobx"
import { Book } from "./Book"

export interface BookData {
    currentBookId: string
    books: IObservableArray<Book>
    totalRows: number
}