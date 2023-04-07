import * as React from "react"
import { StoreContext } from "../../context"
import { RegisterForm, PageContainer, SectionHeading, SectionWrap } from ".."

export class Register extends React.Component {
    render() {
        return <PageContainer data-testid="library-app-register" sx={{
            margin: "0 auto",
            maxWidth: "400px",
        }}>
            <SectionWrap>
                <SectionHeading variant="h4">
                    Регистрация
                </SectionHeading>
                <RegisterForm />
            </SectionWrap>
        </PageContainer>
    }
}
Register.contextType = StoreContext