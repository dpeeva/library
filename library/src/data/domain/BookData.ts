/* istanbul ignore file */

import { IObservableArray } from "mobx"
import { Book } from "./Book"

export interface BookData {
    books: IObservableArray<Book>
    totalRows: number
}