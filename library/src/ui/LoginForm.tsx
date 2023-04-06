import * as React from "react"
import { mui } from "../assets"
import { StoreContext } from "../context"

const FormRow = mui.styled(mui.Box)({
    display: "flex",
    padding: "8px  0",
})

export const LoginForm = () => {
    const { userState } = React.useContext(StoreContext)

    return <form method="POST" onSubmit={userState.onLogin}>
        <FormRow>
            <mui.TextField
                label="Потребителско име"
                placeholder="Потребителско име"
                color="secondary"
                helperText={""}
                fullWidth
            />
        </FormRow>
        <FormRow>
            <mui.TextField
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