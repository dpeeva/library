import { action, computed, observable } from "mobx"
import { Book, BookDetailsRequestType } from "./domain"
import { BookDetailsProvider } from "./providers/BookDetailsProvider"

export class BookDetailsStore {
    @observable public options: BookDetailsRequestType
    @observable public bookDetailsProvider: BookDetailsProvider

    constructor(
        private readonly bookDetailsProviderFactory: (options: BookDetailsRequestType) => BookDetailsProvider
    ) {
        this.options = observable({
            _id: "",
            jwt: ""
        })
        this.bookDetailsProvider = this.bookDetailsProviderFactory(this.options)
    }

    @computed get bookDetailsOptions() {
        return {
            _id: this.options._id,
            jwt: this.options.jwt
        }
    }

    @action public changeOptions(options: Partial<BookDetailsRequestType>) {
        Object.assign(this.options, options)
    }

    @computed get bookDetails(): Book {
        return this.bookDetailsProvider.data
            ? this.bookDetailsProvider.data
            : {}
    }

    @action public resetOptions = () => {
        this.options = observable({
            _id: "",
        })
    }

    @action getBook = async () => {
        this.bookDetailsProvider = this.bookDetailsProvider.setOptions(this.options)
        await this.bookDetailsProvider.fetch()
    }

    @action deleteBook = async () => {
        await this.bookDetailsProvider.delete()
    }
}