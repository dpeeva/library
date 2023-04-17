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
    cb: () => Promise<void>
}

@observer
class Container extends React.Component<Props> {

    private get store(): Store {
        return this.context as Store
    }

    onSubmit = async (e: any, callback: Function) => {
        e.preventDefault()
        const { bookStore, userState } = this.store
        // TODO: check why needed to set jwt here explicitly
        bookStore.changeOptions({
            jwt: userState.options.jwt
        })
        await callback()
        // TODO: rerender on add/edit
        // this.props.navigate(0)
    }

    render() {
        const { bookStore } = this.store

        return <form method="POST" onSubmit={(e) => this.onSubmit(e, this.props.cb)}>
            <FormRow>
                <mui.TextField
                    name="title"
                    value={bookStore.options.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        bookStore.changeOptions({
                            title: e.target.value
                        })
                    }}
                    required
                    label="Заглавие"
                    placeholder="Въведи заглавие"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>
            <FormRow>
                <mui.TextField
                    name="author"
                    value={bookStore.options.author}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        bookStore.changeOptions({
                            author: e.target.value
                        })
                    }}
                    required
                    label="Автор"
                    placeholder="Въведи автор"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>
            <FormRow>
                <mui.TextField
                    name="volume"
                    value={bookStore.options.volume}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        bookStore.changeOptions({
                            volume: e.target.value
                        })
                    }}
                    label="Том"
                    placeholder="Въведи том (ако има)"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>
            <FormRow>
                <mui.TextField
                    name="publisher"
                    value={bookStore.options.publisher}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        bookStore.changeOptions({
                            publisher: e.target.value
                        })
                    }}
                    label="Издател"
                    placeholder="Въведи издател"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>
            <FormRow>
                <mui.TextField
                    name="yearOfRelease"
                    value={bookStore.options.yearOfRelease}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        bookStore.changeOptions({
                            yearOfRelease: e.target.value
                        })
                    }}
                    type="number"
                    label="Година на издаване"
                    placeholder="Въведи година на издаване"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>
            <FormRow>
                <mui.TextField
                    name="pagesCount"
                    value={bookStore.options.pagesCount}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        bookStore.changeOptions({
                            pagesCount: e.target.value
                        })
                    }}
                    label="Брой страници"
                    placeholder="Въведи брой страници"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>
            <FormRow>
                <mui.TextField
                    name="coverImage"
                    value={bookStore.options.coverImage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        bookStore.changeOptions({
                            coverImage: e.target.value
                        })
                    }}
                    label="Изображение на корицата"
                    placeholder="Въведи линк"
                    color="secondary"
                    helperText={""}
                    fullWidth
                />
            </FormRow>

            <FormRow>
                <mui.FormControl fullWidth>
                    <mui.InputLabel id="cover-type">Тип корица</mui.InputLabel>
                    <mui.Select
                        labelId="cover-type"
                        value={bookStore.options.cover}
                        label="Тип корица"
                        onChange={(e: any) => {
                            bookStore.changeOptions({
                                cover: e.target.value
                            })
                        }}
                        variant="outlined"
                        color="secondary"
                    >
                        <mui.MenuItem value={"softcover"}>Мека</mui.MenuItem>
                        <mui.MenuItem value={"hardcover"}>Твърда</mui.MenuItem>
                    </mui.Select>
                </mui.FormControl>
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

export const BookForm = ({ cb }: any) => {
    const navigate = useNavigate()
    return <Container navigate={navigate} cb={cb} />
}