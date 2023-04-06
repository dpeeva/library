import * as React from "react"
import { StoreContext } from "../../context"
import { LoginForm, PageContainer, SectionHeading, SectionWrap } from ".."

export class Login extends React.Component {
    render() {
        return <PageContainer data-testid="library-app-home" sx={{
            margin: "0 auto",
            maxWidth: "400px",
        }}>
            <SectionWrap>
                <SectionHeading variant="h4">
                    Вход
                </SectionHeading>
                <LoginForm />
            </SectionWrap>
        </PageContainer>
    }
}
Login.contextType = StoreContext