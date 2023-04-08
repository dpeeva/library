import * as React from "react"
import { observer } from "mobx-react"
import { mui } from "../../assets"
import { StoreContext } from "../../context"
import { Store } from "../../data"
import { BooksList, CreateModal, PageContainer, SectionHeading, SectionWrap } from ".."

@observer
export class Catalog extends React.Component {

    private get store(): Store {
        return this.context as Store
    }

    render() {
        const { bookStore, userState } = this.store

        return <PageContainer data-testid="library-app-catalog">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Каталог
                </SectionHeading>
                {userState.isAuthenticated &&
                    <mui.Button
                        variant="contained"
                        color="warning"
                        onClick={bookStore.openCreateModal}
                    >Добави книга</mui.Button>
                }
                <CreateModal />
                <BooksList />
            </SectionWrap>
        </PageContainer>
    }
}
Catalog.contextType = StoreContext