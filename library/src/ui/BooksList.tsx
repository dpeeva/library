import * as React from "react"
import { mui, muiIcon } from "../assets"
import { StoreContext } from "../context"
import { Book } from "../domain"

const UserActions = mui.styled(mui.Box)(({ theme }) => ({
    padding: "4px",
    backgroundColor: theme.palette.common.black,
    color: theme.palette.secondary.contrastText,
    textAlign: "right"
}))

export const BooksList: React.FunctionComponent = () => {
    const { bookStore } = React.useContext(StoreContext)

    return <mui.Grid container spacing={8}>
        {bookStore.books.map(
            (book: Book, index: number) => (
                <mui.Grid key={`book-${index}`} item xs={6} md={4} lg={3}>
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

                            <mui.Tooltip
                                title="Добави в любими"
                                placement="top"
                            >
                                <mui.IconButton color="inherit" onClick={() => { }}>
                                    <muiIcon.FavoriteBorder />
                                </mui.IconButton>
                            </mui.Tooltip>
                        </UserActions>

                        <mui.CardContent>
                            <mui.Typography variant="h6" component={"div"} fontWeight={"bold"} sx={{
                                maxHeight: "96px",
                                overflow: "hidden",
                            }}>
                                {book.title}
                            </mui.Typography>
                            <mui.Typography variant="body1" mt={1}>
                                {book.author.map(a => a).join(", ")}
                            </mui.Typography>
                            <mui.Typography mt={1}>
                                Publisher: {book.publisher.map(p => p).join(", ")}
                            </mui.Typography>
                            {book.volume && <mui.Typography mt={1}>
                                Volume: {book.volume}
                            </mui.Typography>}
                        </mui.CardContent>

                        <mui.CardActions sx={{
                            paddingBottom: "16px"
                        }}>
                            <mui.Button
                                color="warning"
                                variant="contained"
                                onClick={() => { }}
                            >Виж повече</mui.Button>
                        </mui.CardActions>
                    </mui.Card>
                </mui.Grid>
            )
        )}
    </mui.Grid>
}