import * as React from "react"
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom"
import { StoreContext } from "../../context"
import { mui } from "../../assets"
import { PageContainer, SectionHeading, SectionWrap } from ".."
import { Store } from "../../data"

const Row = mui.styled(mui.Box)({
    margin: "12px 0",
})

interface Props {
    navigate: NavigateFunction
}

const Userdata = mui.styled(mui.Typography)<{ component: React.ElementType }>({
    paddingLeft: "8px",
    fontWeight: "bold",
})

export class Container extends React.Component<Props> {

    private get store(): Store {
        return this.context as Store
    }

    render() {
        const { userState } = this.store

        if (!userState.isAuthenticated) {
            return <Navigate to="/" />
        }

        return <PageContainer data-testid="library-app-profile">
            <SectionWrap>
                <SectionHeading variant="h4">
                    Профил
                </SectionHeading>

                {userState.userData.username && <Row>
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
                        {userState.userData.email}
                    </Userdata>
                </Row>
            </SectionWrap>
        </PageContainer>
    }
}
Container.contextType = StoreContext

export const Profile = (props: any) => {
    const navigate = useNavigate()
    return <Container navigate={navigate} />
}