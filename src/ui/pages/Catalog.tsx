import * as React from "react"
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom"
import { observer } from "mobx-react"
import { mui } from "../../assets"
import { StoreContext } from "../../context"
import { Store } from "../../data"
import { BooksList, CreateModal, PageContainer, SectionHeading, SectionWrap } from ".."

const SectionAddBook = mui.styled(mui.Box)({
    padding: "0 0 40px",
})

interface Props {
    navigate: NavigateFunction
}

@observer
export class Container extends React.Component<Props> {

    private get store(): Store {
        return this.context as Store
    }

    render() {
        const { bookStore, userState } = this.store

        if (!userState.isAuthenticated) {
            return <Navigate to="/" />
        }

        bookStore.changeOptions({
            _ownerId: userState.options._id
        })
        const books = bookStore.userBooks

        return <PageContainer data-testid="library-app-catalog">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Каталог
                </SectionHeading>
                {userState.isAuthenticated &&
                    <SectionAddBook>
                        <mui.Button
                            variant="contained"
                            color="warning"
                            onClick={bookStore.openCreateModal}
                        >Добави книга</mui.Button>
                    </SectionAddBook>
                }
                <CreateModal />
                <SectionHeading variant="h4">
                    Книги в каталога
                </SectionHeading>
                {books.length !== 0
                    ? <BooksList books={books} />
                    : "Все още нямате добавени книги в каталога"
                }
            </SectionWrap>
        </PageContainer>
    }
}
Container.contextType = StoreContext

export const Catalog = () => {
    const navigate = useNavigate()
    return <Container navigate={navigate} />
}