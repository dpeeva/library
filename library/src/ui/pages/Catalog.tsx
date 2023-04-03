import * as React from "react"
import { StoreContext } from "../../context"
import { BooksList, PageContainer, SectionHeading, SectionWrap } from ".."

export class Catalog extends React.Component {
    render() {
        return <PageContainer data-testid="library-app-catalog">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Каталог
                </SectionHeading>
                <BooksList />
            </SectionWrap>
        </PageContainer>
    }
}
Catalog.contextType = StoreContext