import * as React from "react"
import { StoreContext } from "../../context"
import { mui } from "../../assets"
import { PageContainer, SectionHeading, SectionWrap } from ".."
import { Store } from "../../data"

const Row = mui.styled(mui.Box)({
    margin: "12px 0",
})

const Userdata = mui.styled(mui.Typography)<{ component: React.ElementType }>({
    paddingLeft: "8px",
    fontWeight: "bold",
})

export class Profile extends React.Component {

    private get store(): Store {
        return this.context as Store
    }

    render() {
        return <PageContainer data-testid="library-app-profile">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Профил
                </SectionHeading>

                {this.store.userState.userData.username && <Row>
                    <mui.Typography variant="h6" component={"span"}>
                        Потребителско име:
                    </mui.Typography>
                    <Userdata variant="h6" component={"span"}>
                        {this.store.userState.userData.username}
                    </Userdata>
                </Row>}

                <Row>
                    <mui.Typography variant="h6" component={"span"}>
                        Имейл:
                    </mui.Typography>
                    <Userdata variant="h6" component={"span"}>
                        {this.store.userState.userData.email}
                    </Userdata>
                </Row>
            </SectionWrap>
        </PageContainer>
    }
}
Profile.contextType = StoreContext