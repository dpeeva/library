import * as React from "react"
import { StoreContext } from "../../context"
import { PageContainer } from "../PageContainer"
import { SectionHeading } from "../SectionHeading"
import { SectionWrap } from "../SectionWrap"

interface Props {
    //
}

export class Details extends React.Component<Props> {
    render() {
        return <PageContainer>
            <SectionWrap>
                <SectionHeading variant="h4">
                    Details
                </SectionHeading>
            </SectionWrap>
        </PageContainer>
    }
}
Details.contextType = StoreContext