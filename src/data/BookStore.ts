import { action, computed, observable } from "mobx"
import { Book, BooksRequestType } from "./domain"
import { BooksProvider, UserBooksProvider } from "./providers"

export class BookStore {
    @observable public options: BooksRequestType
    @observable public booksProvider: BooksProvider
    @observable public userBooksProvider: UserBooksProvider
    @observable public isCreateModalOpen = false
    @observable public isEditModalOpen = false

    constructor(
        private readonly booksProviderFactory: (options: BooksRequestType) => BooksProvider,
        private readonly userBooksProviderFactory: (options: BooksRequestType) => UserBooksProvider
    ) {
        this.options = observable({
            jwt: "",
            _id: "",
            _ownerId: "",
            _createdOn: "",
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
            jwt: this.options.jwt,
            _id: "",
            _ownerId: "",
            _createdOn: "",
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

    @action openCreateModal = () => {
        this.resetOptions()
        this.isCreateModalOpen = true
    }

    @action openEditModal = (id: string) => {
        this.changeOptions({
            _id: this.bookDetails._id,
            _ownerId: this.bookDetails._ownerId,
            _createdOn: this.bookDetails._createdOn,
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
        return this.booksProvider.data.books.find(
            (book: Book) => book._id === this.options._id
        ) || {}
    }

    @action getBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.fetchById()
    }

    @action deleteBook = async () => {
        await this.booksProvider.delete()
        this.resetOptions()
    }

    @action addBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.addBook()
        this.isCreateModalOpen = false
    }

    @action editBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.editBook()
        this.isEditModalOpen = false
    }
}