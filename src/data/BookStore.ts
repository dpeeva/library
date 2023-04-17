import { action, computed, observable } from "mobx"
import { Book, BooksRequestType } from "./domain"
import { BookDetailsProvider, BooksProvider, UserBooksProvider } from "./providers"

export class BookStore {
    @observable public options: BooksRequestType
    @observable public booksProvider: BooksProvider
    @observable public bookDetailsProvider: BookDetailsProvider
    @observable public userBooksProvider: UserBooksProvider
    @observable public isCreateModalOpen = false;
    @observable public isEditModalOpen = false;

    constructor(
        private readonly booksProviderFactory: (options: BooksRequestType) => BooksProvider,
        private readonly bookDetailsProviderFactory: (options: BooksRequestType) => BookDetailsProvider,
        private readonly userBooksProviderFactory: (options: BooksRequestType) => UserBooksProvider
    ) {
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
        this.booksProvider = this.booksProviderFactory(this.options)
        this.bookDetailsProvider = this.bookDetailsProviderFactory(this.options)
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
        this.resetOptions()
        this.isCreateModalOpen = true
    }

    openEditModal = (id: string) => {
        this.changeOptions({
            _id: this.bookDetails._id,
            _ownerId: this.bookDetails._ownerId,
            title: this.bookDetails.title,
            author: this.bookDetails.author,
            volume: this.bookDetails.volume,
            publisher: this.bookDetails.publisher,
            yearOfRelease: this.bookDetails.yearOfRelease,
            pagesCount: this.bookDetails.pagesCount,
            cover: this.bookDetails.cover,
            coverImage: this.bookDetails.coverImage
        })
        this.isEditModalOpen = true
    }

    @computed get bookDetails(): Book {
        return this.bookDetailsProvider.data
            ? this.bookDetailsProvider.data
            : {}
    }

    @action getBook = async () => {
        this.bookDetailsProvider = this.bookDetailsProvider.setOptions(this.options)
        await this.bookDetailsProvider.fetch()
    }

    @action deleteBook = async () => {
        await this.bookDetailsProvider.delete()
    }

    @action addBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.addBook()
        // TODO: rerender with newly added books
        this.isCreateModalOpen = false
    }

    @action editBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.editBook()
        // TODO: rerender with edited details
        this.isEditModalOpen = false
    }
}