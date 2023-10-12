import { useState, useEffect } from "react";

// Determine if an element is visible in the page
export const useIsElementVisible = (element: HTMLElement | null) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(entry.isIntersecting);
            } else setIsIntersecting(false);
        }, { threshold: 1.0 });     // 100% of the observed element's body needs to be visible to trigger the function
        
        if (element) observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [element]);

    return isIntersecting;
};
