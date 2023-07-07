import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    className?: string;
    warning?: boolean;
}

const LoadingSpinner = ({ className, warning }: PropTypes) => {
    return (
        <div className={className}>
            <div>
                <FontAwesomeIcon icon={faSpinner} spin />
                <p>Loading...</p>
            </div>
            {warning ? <p className="loading_warning">This may take up to a minute</p> : null}
        </div>
    );
};

export default LoadingSpinner;
