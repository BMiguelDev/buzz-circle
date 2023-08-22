import { useState, useEffect } from "react";

// Custom hook to determine if an element (referenced by <ref>) is visible in the page
export const useIsElementVisible = (ref: HTMLElement | null) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(entry.isIntersecting);
                if (ref) observer.unobserve(ref);
            } else setIsIntersecting(false);
        }, { threshold: 1.0 });     // 100% of the observed element's body needs to be visible to trigger the function
        if (ref) observer.observe(ref);

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
};
