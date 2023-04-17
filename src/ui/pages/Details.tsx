import * as React from "react"
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom"
import { observer } from "mobx-react"
import { mui, muiIcon } from "../../assets"
import { StoreContext } from "../../context"
import { Store } from "../../data"
import { EditModal, PageContainer, SectionHeading, SectionWrap } from ".."

const BookDetails = mui.styled(mui.Box)({
    //
})

const UserActions = mui.styled(mui.Box)(({ theme }) => ({
    padding: "4px",
    minHeight: "48px",
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

    handleEdit = (id: string) => {
        const { bookStore } = this.store
        bookStore.openEditModal(id)
    }

    handleDelete = async () => {
        const { bookStore } = this.store
        await bookStore.deleteBook()
        this.props.navigate("/catalog")
    }

    render() {
        const { bookStore, userState } = this.store
        const bookDetails = bookStore.bookDetails
        const isAuthenticated = userState.isAuthenticated
        const isOwner = userState.isOwner(bookDetails._ownerId || "")

        return (
            bookStore.currentBookId !== ""
                ? <PageContainer data-testid="library-app-details">
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
                                    {isAuthenticated && isOwner && <>
                                        <mui.Tooltip
                                            title="Редактирай"
                                            placement="top"
                                        >
                                            <mui.IconButton
                                                color="inherit"
                                                onClick={() => this.handleEdit(bookDetails._id || "")}
                                            >
                                                <muiIcon.Edit />
                                            </mui.IconButton>
                                        </mui.Tooltip>

                                        <mui.Tooltip
                                            title="Премахни от каталога"
                                            placement="top"
                                        >
                                            <mui.IconButton
                                                color="inherit"
                                                onClick={this.handleDelete}
                                            >
                                                <muiIcon.Delete />
                                            </mui.IconButton>
                                        </mui.Tooltip>
                                    </>}
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

                            </mui.Card>}
                        </BookDetails>

                        <EditModal bookId={bookDetails._id || ""} />
                    </SectionWrap>
                </PageContainer>
                : <Navigate to="/" />
        )
    }
}
Container.contextType = StoreContext

export const Details = (props: any) => {
    const navigate = useNavigate()
    return <Container navigate={navigate} />
}
