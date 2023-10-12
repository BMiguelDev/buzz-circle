import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";

import GlobalStyles from "../components/styles/Global";
import { StyledFooter, StyledNavbar } from "../components/styles/Layout.styles";
import useLocalStorage from "../hooks/useLocalStorage";

const lightTheme: DefaultTheme = {
    appBgColor: "rgb(215, 217, 206)",
    appBgColorSupport: "rgb(223, 225, 213)",
    appBgColorTransparent: "rgba(215, 217, 206, .5)",
    appTitleColor: "rgb(235, 235, 235)",
    appTextMainColor: "rgb(4, 4, 4)",
    appTextSupportColor: "rgb(122, 122, 122)",
    appTextInputColor: "rgb(4, 4, 4)",
    appWarningColor1: "rgb(213, 32, 32)",
    appWarningColor2: "rgb(255, 138, 140)",
    appWarningColor3: "rgb(185, 17, 17)",
    appWarningColor4: "rgb(120, 4, 4)",
    appWarningColor5: "rgb(252, 105, 105)",
    appWarningColor6: "rgb(199, 16, 16)",
    appPrimaryColor: "rgb(20, 17, 123)",
    appPrimaryColorTransparent: "rgba(20, 17, 123, .75)",
    appSecondaryColor: "rgb(163, 118, 187)",
    appSecondaryColorTransparent: "rgba(149, 104, 174, .5)",
    appSecondaryColorSupport: "rgb(98, 51, 123)",
    appSecondaryColorSupport2: "rgb(98, 51, 123)",
    appSecondaryColorSupport3: "rgba(155, 118, 175, 0.581)",
    appSecondaryColorSupport4: "rgb(184, 143, 206)",
    appIntermediateColor: "rgb(16, 85, 122)",
    appIntermediateSupportColor: "rgb(180, 208, 215)",
};

const darkTheme: DefaultTheme = {
    appBgColor: "rgb(32, 32, 32)",
    appBgColorSupport: "rgb(26, 26, 26)",
    appBgColorTransparent: "rgba(32 ,32 ,32, .5)",
    appTitleColor: "rgb(239, 239, 239)",
    appTextMainColor: "rgb(239, 239, 239)",
    appTextSupportColor: "rgb(130, 130, 130)",
    appTextInputColor: "rgb(4, 4, 4)",
    appWarningColor1: "rgb(240, 44, 44)",
    appWarningColor2: "rgb(183, 27, 27)",
    appWarningColor3: "rgb(255, 203, 204)",
    appWarningColor4: "rgb(255, 77, 77)",
    appWarningColor5: "rgb(103, 0, 0)",
    appWarningColor6: "rgb(240, 44, 44)",
    appPrimaryColor: "rgb(93, 160, 253)",
    appPrimaryColorTransparent: "rgba(93, 160, 253, .75)",
    appSecondaryColor: "rgb(78, 10, 97)",
    appSecondaryColorTransparent: "rgba(78, 10, 97, .5)",
    appSecondaryColorSupport: "rgb(110, 16, 136)",
    appSecondaryColorSupport2: "rgb(78, 10, 97)",
    appSecondaryColorSupport3: "rgba(113, 76, 125, 0.738)",
    appSecondaryColorSupport4: "rgb(98, 20, 120)",
    appIntermediateColor: "rgb(187, 216, 241)",
    appIntermediateSupportColor: "rgb(187, 216, 241)",
};

const LOCAL_STORAGE_IS_DARK_MODE = "BuzzCircle.isDarkMode";

const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(LOCAL_STORAGE_IS_DARK_MODE, true);
    const [isBurgerMenuToggled, setIsBurgerMenuToggled] = useState(false);

    const burgerMenuRef = useRef<HTMLUListElement>(null);
    const appDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            let deviceWidth = window.matchMedia("(max-width: 1200px)");
            // If device's width matches the media query, call the resize function
            if (deviceWidth.matches) {
                if (appDivRef.current) appDivRef.current.style.minHeight = `${window.innerHeight}px`;
            } else {
                if (appDivRef.current) appDivRef.current.style.minHeight = `100vh`;
            }
        };
        
        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleIsDarkMode = () => {
        setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    }; 

    function handleToggleBurgerMenu(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) {
        setIsBurgerMenuToggled((prevIsBurgerMenuToggled) => !prevIsBurgerMenuToggled);
        event.stopPropagation();
    }

    function handlePageClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target as Node)) setIsBurgerMenuToggled(false);
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <div className="app_container" ref={appDivRef} onClick={handlePageClick}>
                <GlobalStyles />
                <StyledNavbar
                    isDarkMode={isDarkMode}
                    toggleIsDarkMode={toggleIsDarkMode}
                    isBurgerMenuToggled={isBurgerMenuToggled}
                    handleToggleBurgerMenu={handleToggleBurgerMenu}
                    burgerMenuRef={burgerMenuRef}
                />
                <main>
                    <Outlet />
                </main>
                <StyledFooter />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
