import * as React from "react"
import { useParams } from "react-router-dom"
import { mui, muiIcon } from "../../assets"
import { StoreContext } from "../../context"
import { PageContainer, SectionHeading, SectionWrap } from ".."

const BookDetails = mui.styled(mui.Box)({
    //
})

const UserActions = mui.styled(mui.Box)(({ theme }) => ({
    padding: "4px",
    backgroundColor: theme.palette.common.black,
    color: theme.palette.secondary.contrastText,
    textAlign: "right"
}))

export const Details = () => {
    const { id } = useParams()
    const { bookDetails } = React.useContext(StoreContext).bookDetailsStore
    debugger

    return <PageContainer data-testid="library-app-details">
        <SectionWrap>
            <SectionHeading variant="h4">
                Details
            </SectionHeading>

            <BookDetails>
                {bookDetails && <mui.Card>
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
                            {bookDetails.title}
                        </mui.Typography>
                        <mui.Typography variant="body1" mt={1}>
                            {bookDetails.author}
                        </mui.Typography>
                        <mui.Typography mt={1}>
                            Publisher: {bookDetails.publisher}
                        </mui.Typography>
                        {bookDetails.volume && <mui.Typography mt={1}>
                            Volume: {bookDetails.volume}
                        </mui.Typography>}
                    </mui.CardContent>

                    <mui.CardActions sx={{
                        paddingBottom: "16px"
                    }}>
                        <mui.Button
                            color="warning"
                            variant="contained"
                            onClick={() => { }}
                        >Редактирай</mui.Button>
                    </mui.CardActions>
                </mui.Card>}
            </BookDetails>
        </SectionWrap>
    </PageContainer>
}