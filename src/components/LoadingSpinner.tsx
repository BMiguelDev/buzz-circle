import { useEffect, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    className?: string;
}

const LoadingSpinner = ({ className }: PropTypes) => {
    const [isWarning, setIsWarning] = useState(false);

    useEffect(() => {
        const longLoading = setTimeout(() => {
            setIsWarning(true);
        }, 5000);

        return () => {
            clearTimeout(longLoading);
        }
    }, [])

    return (
        <div className={className}>
            <div>
                <FontAwesomeIcon icon={faSpinner} spin />
                <p>Loading...</p>
            </div>

            { isWarning ? <p className="loading_warning">This may take up to a minute</p> : null }
        </div>
    );
};

export default LoadingSpinner;
