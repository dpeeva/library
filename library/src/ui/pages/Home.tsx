import * as React from "react"
import { StoreContext } from "../../context"
import { BooksList, HeroUnit, PageContainer, SectionHeading, SectionWrap } from ".."

export class Home extends React.Component {
    render() {
        return <PageContainer data-testid="library-app-home">
            <HeroUnit />
            <SectionWrap>
                <SectionHeading variant="h4">
                    Последно добавени
                </SectionHeading>
                <BooksList />
            </SectionWrap>
        </PageContainer>
    }
}
Home.contextType = StoreContext