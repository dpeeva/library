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
        const { bookStore, bookDetailsStore, userState } = this.store
        await userState.onLogin()
        bookStore.changeOptions({
            _ownerId: userState.options._id
        })
        bookDetailsStore.changeOptions({
            jwt: userState.options.jwt
        })
        this.props.navigate("/")
    }

    render() {
        const { userState } = this.store

        return <form method="POST" onSubmit={this.onSubmit}>
            <FormRow>
                <mui.TextField
                    name="username"
                    value={userState.options.username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        userState.changeOptions({
                            username: e.target.value
                        })
                    }}
                    label="Потребителско име"
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