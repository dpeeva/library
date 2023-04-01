import * as React from "react"
import { StoreContext } from "../../context"
import { PageContainer } from "../PageContainer"
import { SectionHeading } from "../SectionHeading"
import { SectionWrap } from "../SectionWrap"

interface Props {
    //
}

export class NotFound extends React.Component<Props> {
    render() {
        return <PageContainer>
            <SectionWrap>
                <SectionHeading variant="h4">
                    404: Page Not Found
                </SectionHeading>
            </SectionWrap>
        </PageContainer>
    }
}
NotFound.contextType = StoreContext