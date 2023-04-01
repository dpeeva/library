import * as React from "react"
import { StoreContext } from "../../context"
import { PageContainer } from "../PageContainer"
import { SectionHeading } from "../SectionHeading"
import { SectionWrap } from "../SectionWrap"

interface Props {
    //
}

export class Profile extends React.Component<Props> {
    render() {
        return <PageContainer>
            <SectionWrap>
                <SectionHeading variant="h4">
                    Profile
                </SectionHeading>
            </SectionWrap>
        </PageContainer>
    }
}
Profile.contextType = StoreContext