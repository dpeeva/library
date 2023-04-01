import * as React from "react"
import { StoreContext } from "../../context"
import { BooksList } from "../BooksList"
import { PageContainer } from "../PageContainer"
import { SectionHeading } from "../SectionHeading"
import { SectionWrap } from "../SectionWrap"

export class Catalog extends React.Component {

    render() {
        return <PageContainer>
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