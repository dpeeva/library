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

@observer
export class CreateModal extends React.Component {

    private get store(): Store {
        return this.context as Store
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
                    <BookForm />
                </Content>
            </Wrapper>
        </mui.Modal>
    }
}
CreateModal.contextType = StoreContext