import { action, computed, observable } from "mobx"
import { Book, BooksRequestType } from "./domain"
import { BookDetailsProvider, BooksProvider, UserBooksProvider } from "./providers"

export class BookStore {
    @observable public options: BooksRequestType
    @observable public booksProvider: BooksProvider
    @observable public bookDetailsProvider: BookDetailsProvider
    @observable public userBooksProvider: UserBooksProvider
    @observable public isCreateModalOpen = false
    @observable public isEditModalOpen = false
    @observable public currentBookId: string

    constructor(
        private readonly booksProviderFactory: (options: BooksRequestType) => BooksProvider,
        private readonly bookDetailsProviderFactory: (options: BooksRequestType) => BookDetailsProvider,
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
        this.bookDetailsProvider = this.bookDetailsProviderFactory(this.options)
        this.userBooksProvider = this.userBooksProviderFactory(this.options)
        this.currentBookId = this.booksProvider.data.currentBookId
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
            _id: this.booksProvider.data.currentBookId,
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

    public resetCurrentBookId = (id: string) => {
        this.currentBookId = id
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
        return this.bookDetailsProvider.data
            ? this.bookDetailsProvider.data
            : {}
    }

    @action getBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.fetchById()
        this.resetCurrentBookId(this.booksProvider.data.currentBookId)
    }

    @action deleteBook = async () => {
        await this.booksProvider.delete()
        this.resetOptions()
        this.resetCurrentBookId("")
    }

    @action addBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.addBook()
        // TODO: rerender with newly added books
        this.resetCurrentBookId(this.booksProvider.data.currentBookId)
        this.isCreateModalOpen = false
    }

    @action editBook = async () => {
        this.booksProvider = this.booksProvider.setOptions(this.options)
        await this.booksProvider.editBook()
        // TODO: rerender with edited details
        this.resetCurrentBookId(this.booksProvider.data.currentBookId)
        this.isEditModalOpen = false
    }
}