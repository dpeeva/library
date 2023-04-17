import { mui, hero } from "../assets"

const TabContent = mui.styled(mui.Stack)({
    justifyContent: "center",
    alignItems: "center",
    margin: "24px auto",
})

const Hero = mui.styled("img")({
    marginRight: "40px",
})

const HeroContent = mui.styled(mui.Box)({
    width: "100%",
    maxWidth: "600px",
})

export const IntroUnit = () => {
    return <TabContent direction={"row"} sx={{ alignItems: "end" }}>
        <Hero src={hero} alt="Hero Unit" width={"280px"} />
        <HeroContent>
            <mui.Typography variant="h4">
                Създай каталог на своята библиотека
            </mui.Typography>
            <mui.Typography variant="h6" mb={2} component={"p"} mt={2}>
                Открий бързо и лесно заглавията. Остави детайлите на нас!
            </mui.Typography>
        </HeroContent>
    </TabContent>
}