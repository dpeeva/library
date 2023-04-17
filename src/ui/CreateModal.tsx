import * as React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { action } from "mobx"
import { observer } from "mobx-react"
import { mui, muiIcon } from "../assets"
import { StoreContext } from "../context"
import { Store } from "../data"
import { BookForm } from "./BookForm"

const Wrapper = mui.styled(mui.Paper)(({ theme }) => ({
    margin: "40px auto",
    padding: "20px",
    width: "600px",
}))

const Header = mui.styled(mui.DialogTitle)(({ }) => ({
    position: "relative"
}))

const CloseButton = mui.styled(mui.IconButton)(({ theme }) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
}))

const Content = mui.styled(mui.Box)(({ theme }) => ({
    padding: "20px",
}))

interface Props {
    navigate: NavigateFunction
}

@observer
export class Container extends React.Component<Props> {

    private get store(): Store {
        return this.context as Store
    }

    @action handleCreate = async () => {
        const { bookStore } = this.store
        await bookStore.addBook()
        this.props.navigate(`/catalog/:${bookStore.booksProvider.data.books[0]._id}`)
    }

    @action handleClose = () => {
        const { bookStore } = this.store
        bookStore.isCreateModalOpen = false
    }

    render() {
        const { bookStore } = this.store

        return <mui.Modal
            open={bookStore.isCreateModalOpen}
            disableEscapeKeyDown={true}
            onClose={this.handleClose}
            data-testid={"create-modal"}
        >
            <Wrapper>
                <Header>
                    Създаване на книга
                    <CloseButton
                        onClick={this.handleClose}
                    >
                        <muiIcon.Close />
                    </CloseButton>
                </Header>
                <Content>
                    <BookForm cb={this.handleCreate} />
                </Content>
            </Wrapper>
        </mui.Modal>
    }
}
Container.contextType = StoreContext

export const CreateModal = () => {
    const navigate = useNavigate()
    return <Container navigate={navigate} />
}