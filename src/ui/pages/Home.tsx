import * as React from "react"
import { observer } from "mobx-react"
import { StoreContext } from "../../context"
import { BooksList, IntroUnit, PageContainer, SectionHeading, SectionWrap } from ".."
import { Store } from "../../data"

@observer
export class Home extends React.Component {

    private get store(): Store {
        return this.context as Store
    }

    render() {
        const { bookStore } = this.store
        const books = bookStore.books

        return <PageContainer data-testid="library-app-home">
            <IntroUnit />
            <SectionWrap>
                {books.length !== 0 && <>
                    <SectionHeading variant="h4">
                        Последно добавени
                    </SectionHeading>
                    <BooksList books={books} />
                </>}
            </SectionWrap>
        </PageContainer>
    }
}
Home.contextType = StoreContext