import { Outlet } from "react-router-dom";

import GlobalStyles from "../components/styles/Global";
import { StyledFooter, StyledNavbar } from "../components/styles/Layout.styles";
import { useEffect, useRef } from "react";

const Layout = () => {
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

    return (
        <div className="app_container" ref={appDivRef}>
            <GlobalStyles />
            <StyledNavbar />
            <main>
                <Outlet />
            </main>
            <StyledFooter />
        </div>
    );
};

export default Layout;
