import * as React from "react"
import { StoreContext } from "../../context"
import { PageContainer, SectionHeading, SectionWrap } from ".."

export class Details extends React.Component {
    render() {
        return <PageContainer data-testid="library-app-details">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Details
                </SectionHeading>
            </SectionWrap>
        </PageContainer>
    }
}
Details.contextType = StoreContext