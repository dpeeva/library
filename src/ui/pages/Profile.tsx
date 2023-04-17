import * as React from "react"
import { StoreContext } from "../../context"
import { PageContainer, SectionHeading, SectionWrap } from ".."

export class Profile extends React.Component {
    render() {
        return <PageContainer data-testid="library-app-profile">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Profile
                </SectionHeading>
            </SectionWrap>
        </PageContainer>
    }
}
Profile.contextType = StoreContext