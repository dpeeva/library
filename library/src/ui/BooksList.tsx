import * as React from "react"
import { observer } from "mobx-react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { mui, muiIcon } from "../assets"
import { StoreContext } from "../context"
import { Store } from "../data"
import { Book } from "../data/domain"

const UserActions = mui.styled(mui.Box)(({ theme }) => ({
    padding: "4px",
    backgroundColor: theme.palette.common.black,
    color: theme.palette.secondary.contrastText,
    textAlign: "right"
}))

interface Props {
    navigate: NavigateFunction
    books: Book[]
}

@observer
export class Container extends React.Component<Props> {

    private get store(): Store {
        return this.context as Store
    }

    handleViewMore = async (id: string) => {
        const { bookDetailsStore } = this.store
        bookDetailsStore.changeOptions({
            _id: id
        })
        await bookDetailsStore.getById()
        this.props.navigate(`/catalog/:${id}`)
    }

    render() {
        const { bookDetailsStore, userState } = this.store
        const isAuthenticated = userState.isAuthenticated

        return <mui.Grid container spacing={8} data-testid="library-app-booklist" >
            {this.props.books.map(
                (book: Book, index: number) => {
                    const isOwner = userState.isOwner(book._ownerId)

                    return <mui.Grid key={`book-${index}`} item xs={6} md={4} lg={3}>
                        <mui.Card>
                            <mui.CardMedia
                                component="img"
                                alt={`${book.title}`}
                                height="460"
                                image={book.coverImage || "https://placehold.co/415x600"}
                            />
                            <UserActions>
                                <mui.Tooltip
                                    title="Добави в каталог"
                                    placement="top"
                                >
                                    <mui.IconButton color="inherit" onClick={() => { }}>
                                        <muiIcon.Dns />
                                    </mui.IconButton>
                                </mui.Tooltip>

                                {isAuthenticated && isOwner && <mui.Tooltip
                                    title="Премахни от каталога"
                                    placement="top"
                                >
                                    <mui.IconButton color="inherit" onClick={() => { }}>
                                        <muiIcon.Delete />
                                    </mui.IconButton>
                                </mui.Tooltip>}

                                {/* <mui.Tooltip
                                    title="Добави в любими"
                                    placement="top"
                                >
                                    <mui.IconButton color="inherit" onClick={() => { }}>
                                        <muiIcon.FavoriteBorder />
                                    </mui.IconButton>
                                </mui.Tooltip> */}
                            </UserActions>

                            <mui.CardContent>
                                <mui.Typography variant="h6" component={"div"} fontWeight={"bold"} sx={{
                                    maxHeight: "96px",
                                    overflow: "hidden",
                                }}>
                                    {book.title}
                                </mui.Typography>
                                <mui.Typography variant="body1" mt={1}>
                                    {book.author}
                                </mui.Typography>
                                {/* <mui.Typography variant="body1" mt={1}>
                                    {book._ownerId}
                                </mui.Typography> */}
                            </mui.CardContent>

                            <mui.CardActions sx={{
                                paddingBottom: "16px"
                            }}>
                                {/* <Link to={`/catalog/:${book._id}`}> */}
                                <mui.Button
                                    color="warning"
                                    variant="contained"
                                    onClick={(e) => this.handleViewMore(book._id)}
                                >Виж повече</mui.Button>
                                {/* </Link> */}
                            </mui.CardActions>
                        </mui.Card>
                    </mui.Grid>
                }
            )}
        </mui.Grid>
    }
}
Container.contextType = StoreContext

export const BooksList = (props: any) => {
    const navigate = useNavigate()
    return <Container navigate={navigate} books={props.books} />
}