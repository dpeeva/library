import * as React from "react"
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
    bookId: string
}

@observer
export class EditModal extends React.Component<Props> {
    bookId: string

    constructor(props: Props) {
        super(props)
        this.bookId = this.props.bookId
    }

    private get store(): Store {
        return this.context as Store
    }

    @action handleClose = () => {
        const { bookStore } = this.store
        bookStore.isEditModalOpen = false
    }

    render() {
        const { bookStore } = this.store

        return <mui.Modal
            open={bookStore.isEditModalOpen}
            disableEscapeKeyDown={true}
            onClose={this.handleClose}
            data-testid={"edit-modal"}
        >
            <Wrapper>
                <Header>
                    Редактиране на книга
                    <CloseButton
                        onClick={this.handleClose}
                    >
                        <muiIcon.Close />
                    </CloseButton>
                </Header>
                <Content>
                    <BookForm cb={bookStore.editBook} />
                </Content>
            </Wrapper>
        </mui.Modal>
    }
}
EditModal.contextType = StoreContext