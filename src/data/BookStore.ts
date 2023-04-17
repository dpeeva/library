import { action, computed, observable } from "mobx"
import { Book, BooksRequestType } from "./domain"
import { BooksProvider, UserBooksProvider } from "./providers"

export class BookStore {
    @observable public options: BooksRequestType
    @observable public booksProvider: BooksProvider
    @observable public userBooksProvider: UserBooksProvider
    @observable public isCreateModalOpen = false;
    @observable public isSubmiting = false

    constructor(
        private readonly booksProviderFactory: (options: BooksRequestType) => BooksProvider,
        private readonly userBooksProviderFactory: (options: BooksRequestType) => UserBooksProvider
    ) {
        this.options = observable({
            jwt: "",
            _ownerId: "",
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
        this.userBooksProvider = this.userBooksProviderFactory(this.options)
    }

    // @computed get bookOptions() {
    //     return {
    //         _id: this.options._id,
    //         title: this.options.title,
    //         author: this.options.author,
    //         volume: this.options.volume,
    //         publisher: this.options.publisher,
    //         yearOfRelease: this.options.yearOfRelease,
    //         pagesCount: this.options.pagesCount,
    //         cover: this.options.cover,
    //     }
    // }

    @action public changeOptions(options: Partial<BooksRequestType>) {
        Object.assign(this.options, options)
    }

    @computed get books(): Book[] {
        return this.booksProvider.data.books.length
            ? this.booksProvider.data.books
            : []
    }

    @computed get userBooks(): Book[] {
        return this.userBooksProvider.data.books.length
            ? this.userBooksProvider.data.books
            : []
    }

    @action public resetOptions = () => {
        this.options = observable({
            jwt: "",
            _id: "",
            _ownerId: "",
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