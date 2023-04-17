import * as React from "react"
import { observer } from "mobx-react"
import { mui, muiIcon } from "../../assets"
import { StoreContext } from "../../context"
import { PageContainer, SectionHeading, SectionWrap } from ".."
import { NavigateFunction, useNavigate } from "react-router-dom"
import { Store } from "../../data"

const BookDetails = mui.styled(mui.Box)({
    //
})

const UserActions = mui.styled(mui.Box)(({ theme }) => ({
    padding: "4px",
    backgroundColor: theme.palette.common.black,
    color: theme.palette.secondary.contrastText,
    textAlign: "right"
}))

interface Props {
    navigate: NavigateFunction
}

@observer
export class Container extends React.Component<Props> {

    private get store(): Store {
        return this.context as Store
    }

    handleDelete = async () => {
        const { bookDetailsStore } = this.store
        await bookDetailsStore.deleteBook()
        this.props.navigate("/catalog")
    }

    render() {
        const { bookDetailsStore, userState } = this.store
        const bookDetails = bookDetailsStore.bookDetails
        const isAuthenticated = userState.isAuthenticated
        const isOwner = userState.isOwner(bookDetails._ownerId)


        return <PageContainer data-testid="library-app-details">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Details
                </SectionHeading>

                <BookDetails>
                    {bookDetails && <mui.Card sx={{ maxWidth: "600px" }}>
                        <mui.CardMedia
                            component="img"
                            alt={`${bookDetails.title}`}
                            height="460"
                            image={bookDetails.coverImage || "https://placehold.co/415x600"}
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
                                <mui.IconButton
                                    color="inherit"
                                    onClick={this.handleDelete}
                                >
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
                                {bookDetails.title}
                            </mui.Typography>
                            <mui.Typography variant="body1" mt={1}>
                                {bookDetails.author}
                            </mui.Typography>
                            {bookDetails.publisher && <mui.Typography mt={1}>
                                Publisher: {bookDetails.publisher}
                            </mui.Typography>}
                            {bookDetails.volume && <mui.Typography mt={1}>
                                Volume: {bookDetails.volume}
                            </mui.Typography>}
                            {bookDetails.yearOfRelease && <mui.Typography mt={1}>
                                Година на издаване: {bookDetails.yearOfRelease}
                            </mui.Typography>}
                        </mui.CardContent>

                        {userState.isAuthenticated && userState.isOwner(bookDetails._ownerId) &&
                            <mui.CardActions sx={{
                                paddingBottom: "16px"
                            }}>
                                <mui.Button
                                    color="warning"
                                    variant="contained"
                                    onClick={() => { }}
                                >Редактирай</mui.Button>
                            </mui.CardActions>
                        }

                    </mui.Card>}
                </BookDetails>
            </SectionWrap>
        </PageContainer>
    }
}
Container.contextType = StoreContext

export const Details = (props: any) => {
    const navigate = useNavigate()
    return <Container navigate={navigate} />
}
