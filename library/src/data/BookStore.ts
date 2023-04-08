import { action, computed, observable } from "mobx"
import { Book, BooksRequestType } from "./domain"
import { BooksProvider } from "./providers"

export class BookStore {
    @observable public options: BooksRequestType
    @observable public booksProvider: BooksProvider
    @observable public userBooks: Book[]
    @observable public isCreateModalOpen = false;
    @observable public isSubmiting = false

    constructor(
        private readonly booksProviderFactory: (options: BooksRequestType) => BooksProvider
    ) {
        this.userBooks = []
        this.options = observable({
            userToken: "",
            _id: "",
            title: "",
            author: "",
            volume: "",
            publisher: "",
            yearOfRelease: "",
            pagesCount: "",
            cover: "",
            coverImage: "",
        })
        this.booksProvider = this.booksProviderFactory(this.options)
    }

    @computed get bookOptions() {
        return {
            _id: this.options._id,
            title: this.options.title,
            author: this.options.author,
            volume: this.options.volume,
            publisher: this.options.publisher,
            yearOfRelease: this.options.yearOfRelease,
            pagesCount: this.options.pagesCount,
            cover: this.options.cover,
        }
    }

    @action public changeOptions(options: Partial<BooksRequestType>) {
        Object.assign(this.options, options)
    }

    @computed get books(): Book[] {
        return this.booksProvider.data.books.length
            ? this.booksProvider.data.books
            : []
    }

    @action public resetOptions = () => {
        this.options = observable({
            userToken: "",
            _id: "",
            title: "",
            author: "",
            volume: "",
            publisher: "",
            yearOfRelease: "",
            pagesCount: "",
            cover: "",
            coverImage: "",
        })
    }

    openCreateModal = () => {
        this.isCreateModalOpen = true
        this.resetOptions()
    }

    @action addBook = async () => {
        this.isSubmiting = true
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.addBook()
        // TODO: rerender current books list to view newly added books
        this.isCreateModalOpen = false
    }
}