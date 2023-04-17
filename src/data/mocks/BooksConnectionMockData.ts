import { Book } from "../domain"

const books: Book[] = [
    {
        _id: "1",
        _ownerId: "",
        _createdOn: "",
        title: "Война и мир",
        author: "Лев Толстой",
        // author: [
        //     "Лев Толстой"
        // ],
        volume: "1",
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2021",
        pagesCount: "516",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2021/11/%D0%9A%D0%BE%D1%80%D0%B8%D1%86%D0%B0-%D0%A2%D0%BE%D0%BC-1-RGB-0-scaled.jpg"
    },
    {
        _id: "2",
        _ownerId: "",
        _createdOn: "",
        title: "Война и мир",
        author: "Лев Толстой",
        // author: [
        //     "Лев Толстой"
        // ],
        volume: "2",
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2021",
        pagesCount: "600",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2021/11/%D0%9A%D0%BE%D1%80%D0%B8%D1%86%D0%B0-%D0%A2%D0%BE%D0%BC-2-RGB-0-scaled.jpg"
    },
    {
        _id: "3",
        _ownerId: "",
        _createdOn: "",
        title: "Война и мир",
        author: "Лев Толстой",
        // author: [
        //     "Лев Толстой"
        // ],
        volume: "3",
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2021",
        pagesCount: "524",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2021/11/%D0%9A%D0%BE%D1%80%D0%B8%D1%86%D0%B0-%D0%A2%D0%BE%D0%BC-3-RGB-0-scaled.jpg"
    },
    {
        _id: "4",
        _ownerId: "",
        _createdOn: "",
        title: "Война и мир",
        author: "Лев Толстой",
        // author: [
        //     "Лев Толстой"
        // ],
        volume: "4",
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2021",
        pagesCount: "548",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2021/11/%D0%9A%D0%BE%D1%80%D0%B8%D1%86%D0%B0-%D0%A2%D0%BE%D0%BC-4-RGB-0-scaled.jpg"
    },
    {
        _id: "5",
        _ownerId: "",
        _createdOn: "",
        title: "Някакво много дълго заглавие на книга, което не се побира на един ред",
        author: "Author 1",
        // author: [
        //     "Author 1",
        //     "Author 2"
        // ],
        publisher: 'Университетско издателство "Св. Климент Охридски"',
        // publisher: [
        //     'Университетско издателство "Св. Климент Охридски"',
        //     "Захарий Стоянов"
        // ],
        yearOfRelease: "2005",
        pagesCount: "208",
        cover: "softcover",
    },
    {
        _id: "6",
        _ownerId: "",
        _createdOn: "",
        title: "Човек на име Уве",
        author: "Фредрик Бакман",
        // author: [
        //     "Фредрик Бакман"
        // ],
        publisher: "Сиела",
        // publisher: [
        //     "Сиела"
        // ],
        yearOfRelease: "2022",
        pagesCount: "296",
        cover: "softcover",
        coverImage: "https://www.ciela.com/media/catalog/product/cache/32bb0748c82325b02c55df3c2a9a9856/c/h/chovek-na-ime-uve-bakman-ciela-front.jpg"
    },
    {
        _id: "7",
        _ownerId: "",
        _createdOn: "",
        title: "Бьорнстад",
        author: "Фредрик Бакман",
        // author: [
        //     "Фредрик Бакман"
        // ],
        publisher: "Сиела",
        // publisher: [
        //     "Сиела"
        // ],
        yearOfRelease: "2017",
        pagesCount: "464",
        cover: "softcover",
        coverImage: "https://www.ciela.com/media/catalog/product/cache/9a7ceae8a5abbd0253425b80f9ef99a5/f/i/file_53_182.jpg"
    },
    {
        _id: "8",
        _ownerId: "",
        _createdOn: "",
        title: "Структурална антропология",
        author: "Клод Леви-Строс",
        // author: [
        //     "Клод Леви-Строс"
        // ],
        volume: "1",
        publisher: "Захарий Стоянов",
        // publisher: [
        //     "Захарий Стоянов"
        // ],
        yearOfRelease: "2015",
        pagesCount: "496",
        cover: "hardcover",
        coverImage: "https://www.book.store.bg/lrgimg/158487/strukturalna-antropologia-tom-1.jpg"
    },
    {
        _id: "9",
        _ownerId: "",
        _createdOn: "",
        title: "Структурална антропология",
        author: "Клод Леви-Строс",
        // author: [
        //     "Клод Леви-Строс"
        // ],
        volume: "2",
        publisher: "Захарий Стоянов",
        // publisher: [
        //     "Захарий Стоянов"
        // ],
        yearOfRelease: "2015",
        pagesCount: "470",
        cover: "hardcover",
        coverImage: "https://zstoyanov.com/wp-content/uploads/2015/07/Strukturalna-antropologia-2.jpg"
    },
    {
        _id: "10",
        _ownerId: "",
        _createdOn: "",
        title: "1Q84",
        author: "Харуки Мураками",
        // author: [
        //     "Харуки Мураками"
        // ],
        publisher: "Колибри",
        // publisher: [
        //     "Колибри"
        // ],
        yearOfRelease: "2023",
        pagesCount: "976",
        cover: "softcover",
        coverImage: "https://www.colibri.bg/k_img/1q84c3.jpg"
    },
    {
        _id: "11",
        _ownerId: "",
        _createdOn: "",
        title: "Майка Нощ",
        author: "Кърт Вонегът",
        // author: [
        //     "Кърт Вонегът"
        // ],
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2021",
        pagesCount: "248",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2021/11/Mayka-Nosht-koritsa.jpg"
    },
    {
        _id: "12",
        _ownerId: "",
        _createdOn: "",
        title: "Механично пиано",
        author: "Кърт Вонегът",
        // author: [
        //     "Кърт Вонегът"
        // ],
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2021",
        pagesCount: "448",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2021/02/147681510_3080159595595971_1164459369760103465_n.jpg"
    },
    {
        _id: "13",
        _ownerId: "",
        _createdOn: "",
        title: "Сирените от Титан",
        author: "Кърт Вонегът",
        // author: [
        //     "Кърт Вонегът"
        // ],
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2021",
        pagesCount: "328",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2021/05/Sirens_of_Titan_koritsa.jpg"
    },
    {
        _id: "14",
        _ownerId: "",
        _createdOn: "",
        title: "Котешка люлка",
        author: "Кърт Вонегът",
        // author: [
        //     "Кърт Вонегът"
        // ],
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2022",
        pagesCount: "336",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2022/03/Koteshka-lyulka-koritsa.jpg"
    },
    {
        _id: "15",
        _ownerId: "",
        _createdOn: "",
        title: "Синята брада",
        author: "Кърт Вонегът",
        // author: [
        //     "Кърт Вонегът"
        // ],
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2022",
        pagesCount: "328",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2022/08/Sinyata_brada_koritsa.jpg"
    },
    {
        _id: "16",
        _ownerId: "",
        _createdOn: "",
        title: "Кланица пет",
        author: "Кърт Вонегът",
        // author: [
        //     "Кърт Вонегът"
        // ],
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2022",
        pagesCount: "232",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2022/10/Slaughterhouse5_print_261022-page-001-4.jpg"
    },
    {
        _id: "17",
        _ownerId: "",
        _createdOn: "",
        title: "Закуска за шампиони",
        author: "Кърт Вонегът",
        // author: [
        //     "Кърт Вонегът"
        // ],
        publisher: "Кръг",
        // publisher: [
        //     "Кръг"
        // ],
        yearOfRelease: "2023",
        pagesCount: "296",
        cover: "hardcover",
        coverImage: "https://kryg.eu/wp-content/uploads/2023/03/Zakuska-za-shampioni_korica.jpg"
    },
]


export const BooksConnectionMockData = {
    data: {
        books: books,
        totalRows: books.length
    }
}