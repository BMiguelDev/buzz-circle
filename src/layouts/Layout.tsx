import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";

import GlobalStyles from "../components/styles/Global";
import { StyledFooter, StyledNavbar } from "../components/styles/Layout.styles";

const lightTheme: DefaultTheme = {
    appBgColor: "rgb(215, 217, 206)",
    appBgColorTransparent: "rgba(215, 217, 206, .5)",
    appTitleColor: "rgb(229, 229, 229)",
    appTextMainColor: "rgb(4, 4, 4)",
    appTextSupportColor: "rgb(122, 122, 122)",
    appPrimaryColor: "rgb(20, 17, 123)",
    appPrimaryColorTransparent: "rgba(20, 17, 123, .75)",
    appSecondaryColor: "rgb(149, 104, 174)",
    appSecondaryColorTransparent: "rgba(149, 104, 174, .5)",
    appSecondaryColorSupport: "rgb(98, 51, 123)",
    appSecondaryColorSupport2: "rgb(98, 51, 123)",
    appIntermediateColor: "rgb(16, 85, 122)",
    appIntermediateSupportColor: "rgb(180, 208, 215)"
};

const darkTheme: DefaultTheme = {
    appBgColor: "rgb(32, 32, 32)",
    appBgColorTransparent: "rgba(32 ,32 ,32, .5)",
    appTitleColor: "rgb(239, 239, 239)",
    appTextMainColor: "rgb(239, 239, 239)",
    appTextSupportColor: "rgb(130, 130, 130)",
    appPrimaryColor: "rgb(93, 160, 253)",
    appPrimaryColorTransparent: "rgba(93, 160, 253, .75)",
    appSecondaryColor: "rgb(78, 10, 97)",
    appSecondaryColorTransparent: "rgba(78, 10, 97, .5)",
    appSecondaryColorSupport: "rgb(110, 16, 136)",
    appSecondaryColorSupport2: "rgb(78, 10, 97)",
    appIntermediateColor: "rgb(187, 216, 241)",
    appIntermediateSupportColor: "rgb(187, 216, 241)"
};

const LOCAL_STORAGE_IS_DARK_MODE = "BuzzCircle.isDarkMode";

const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const localStorageItem = localStorage.getItem(LOCAL_STORAGE_IS_DARK_MODE);
        if(localStorageItem) return JSON.parse(localStorageItem);
        else return true
    });

    const appDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // TODO: Make sure this looks good on mobile
        const handleResize = () => {
            if (appDivRef.current) appDivRef.current.style.minHeight = `${window.innerHeight}px`;
        };
        let deviceWidth = window.matchMedia("(max-width: 1024px)");
        // If device's width matches the media query, call the resize function
        if (deviceWidth.matches) {
            window.addEventListener("resize", handleResize);
            handleResize();
        }

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_IS_DARK_MODE, JSON.stringify(isDarkMode));
    }, [isDarkMode]); 

    const toggleIsDarkMode = () => {
        setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <div className="app_container" ref={appDivRef}>
                <GlobalStyles />
                <StyledNavbar isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} />
                <main>
                    <Outlet />
                </main>
                <StyledFooter />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
