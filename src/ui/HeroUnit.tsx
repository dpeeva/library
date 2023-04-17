import * as React from "react"
import { mui, muiIcon, muiLab, hero, intro_1, intro_2, intro_3, intro_4 } from "../assets"

const TabPanel = mui.styled(muiLab.TabPanel)({
    height: "320px",
})

const TabContent = mui.styled(mui.Stack)({
    justifyContent: "center",
    alignItems: "center",
})

const Hero = mui.styled("img")({
    marginRight: "40px",
})

const HeroContent = mui.styled(mui.Box)({
    width: "100%",
    maxWidth: "600px",
})

const Page = mui.styled(mui.Tab)(({ theme }) => ({
    position: "relative",
    borderRadius: "100%",
    padding: "12px",
    minWidth: 0,
    minHeight: 0,

    "&:after": {
        display: "block",
        content: "''",
        position: "absolute",
        border: "2px solid transparent",
        borderRadius: "100%",
        top: "6px",
        left: "6px",
        width: "28px",
        height: "28px",
        transition: "border-color 0.5s ease",
    },

    "&:hover, &:active": {
        "&:after": {
            borderColor: mui.alpha(theme.palette.warning.light, 0.75),
        },
    },

    "&.Mui-selected": {
        "&:after": {
            borderColor: theme.palette.warning.light,
        },
        ".MuiSvgIcon-root": {
            color: theme.palette.warning.dark,
        }
    }
}))

export const HeroUnit = () => {
    const [page, setPage] = React.useState("1")

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setPage(newValue)
    }

    return <mui.Box>
        <muiLab.TabContext value={page}>
            <TabPanel value="1">
                <TabContent direction={"row"} sx={{ alignItems: "end" }}>
                    <Hero src={hero} alt="Hero Unit" width={"280px"} />
                    <HeroContent>
                        <mui.Typography variant="h4">
                            Създай каталог на своята библиотека
                        </mui.Typography>
                        <mui.Typography variant="h6" mb={2} component={"p"} mt={2}>
                            Открий бързо и лесно заглавията. Остави детайлите на нас!
                        </mui.Typography>
                        <mui.Button
                            color="warning"
                            variant="contained"
                            onClick={() => { }}
                        >Добави каталог</mui.Button>
                    </HeroContent>
                </TabContent>
            </TabPanel>

            <TabPanel value="2">
                <TabContent direction={"row"}>
                    <Hero src={intro_1} alt="Hero Unit 1" width={"340px"} />
                    <HeroContent>
                        <mui.Typography variant="h6" component={"p"} mt={2}>
                            Имаш нужда от ред в домашната библиотека?
                        </mui.Typography>
                    </HeroContent>
                </TabContent>
            </TabPanel>

            <TabPanel value="3">
                <TabContent direction={"row"}>
                    <Hero src={intro_2} alt="Hero Unit 2" width={"300px"} />
                    <HeroContent>
                        <mui.Typography variant="h6" component={"p"} mt={2}>
                            Чудиш се какво си събрал през годините, но нямаш време, за да го опишеш?
                        </mui.Typography>
                    </HeroContent>
                </TabContent>
            </TabPanel>

            <TabPanel value="4">
                <TabContent direction={"row"}>
                    <Hero src={intro_3} alt="Hero Unit 3" width={"340px"} />
                    <HeroContent>
                        <mui.Typography variant="h6" component={"p"} mt={2}>
                            Потърси книжките при нас и ги добави в свой каталог - бързо и лесно!
                        </mui.Typography>
                    </HeroContent>
                </TabContent>
            </TabPanel>

            <TabPanel value="5">
                <TabContent direction={"row"}>
                    <Hero src={intro_4} alt="Hero Unit 4" width={"340px"} />
                    <HeroContent>
                        <mui.Typography variant="h6" component={"p"} mb={2} mt={2}>
                            Регистрирай се, за да добавиш каталог.
                        </mui.Typography>
                        <mui.Button
                            color="warning"
                            variant="contained"
                            onClick={() => { }}
                        >Регистрация</mui.Button>
                    </HeroContent>
                </TabContent>
            </TabPanel>

            <mui.Box>
                <muiLab.TabList onChange={handleChange}
                    aria-label="Hero unit tabs list"
                    sx={{
                        ".MuiTabs-indicator": {
                            backgroundColor: "transparent",
                        },
                        ".MuiTabs-flexContainer": {
                            justifyContent: "center",
                        },
                    }}
                >
                    <Page disableRipple label={
                        <muiIcon.Circle color="warning" fontSize="small" />
                    } value="1" />
                    <Page disableRipple label={
                        <muiIcon.Circle color="warning" fontSize="small" />
                    } value="2" />
                    <Page disableRipple label={
                        <muiIcon.Circle color="warning" fontSize="small" />
                    } value="3" />
                    <Page disableRipple label={
                        <muiIcon.Circle color="warning" fontSize="small" />
                    } value="4" />
                    <Page disableRipple label={
                        <muiIcon.Circle color="warning" fontSize="small" />
                    } value="5" />
                </muiLab.TabList>
            </mui.Box>
        </muiLab.TabContext>
    </mui.Box>
}