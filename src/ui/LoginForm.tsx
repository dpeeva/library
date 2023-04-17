import * as React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { observer } from "mobx-react"
import { mui } from "../assets"
import { StoreContext } from "../context"
import { Store } from "../data"

const FormRow = mui.styled(mui.Box)({
    display: "flex",
    padding: "8px  0",
})

interface Props {
    navigate: NavigateFunction
}

@observer
class Container extends React.Component<Props> {

    private get store(): Store {
        return this.context as Store
    }

    onSubmit = async (e: any) => {
        e.preventDefault()
        const { bookStore, userState } = this.store
        await userState.onLogin()
        bookStore.changeOptions({
            _ownerId: userState.options._id
        })
        bookStore.changeOptions({
            jwt: userState.options.jwt
        })
        this.props.navigate("/catalog")
    }

    render() {
        const { userState } = this.store

        return <form method="POST" onSubmit={this.onSubmit}>
            <FormRow>
                <mui.TextField
                    name="email"
                    value={userState.options.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        userState.changeOptions({
                            email: e.target.value
                        })
                    }}
                    label="Имейл"
                    placeholder="Въведи имейл"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>
            <FormRow>
                <mui.TextField
                    name="password"
                    value={userState.options.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        userState.changeOptions({
                            password: e.target.value
                        })
                    }}
                    type="password"
                    label="Парола"
                    placeholder="Парола"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>

            <FormRow sx={{
                padding: "16px 0",
                justifyContent: "end",
            }}>
                <mui.Button
                    variant="contained"
                    color="warning"
                    size="large"
                    type="submit"
                >Потвърди</mui.Button>
            </FormRow>
        </form>
    }
}
Container.contextType = StoreContext

export const LoginForm = () => {
    const navigate = useNavigate()
    return <Container navigate={navigate} />
}