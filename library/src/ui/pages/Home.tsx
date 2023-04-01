import * as React from "react"
import { StoreContext } from "../../context"
import { BooksList } from "../BooksList"
import { SectionWrap } from "../SectionWrap"
import { HeroUnit } from "../HeroUnit"
import { PageContainer } from "../PageContainer"
import { SectionHeading } from "../SectionHeading"

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