import * as React from "react"
import { StoreContext } from "../../context"
import { PageContainer, SectionHeading, SectionWrap } from ".."

export class NotFound extends React.Component {
    render() {
        return <PageContainer data-testid="library-app-404">
            <SectionWrap>
                <SectionHeading variant="h4">
                    404: Page Not Found
                </SectionHeading>
            </SectionWrap>
        </PageContainer>
    }
}
NotFound.contextType = StoreContext