import { CustomHeader } from "shared/components";
import { PageContentWrapper } from "shared/layouts";
import { Home } from "./components/Home";
import { MusicHeroSection } from "./components/MusicHeroSection/index";

export const WelcomePage = () => {
    return (
        <>
            <CustomHeader />
            <MusicHeroSection />
            <PageContentWrapper>
                <Home />
            </PageContentWrapper>
        </>
    );
};
