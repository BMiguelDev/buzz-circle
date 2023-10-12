import { useNavigate } from "react-router-dom";

interface PropTypes {
    className?: string;
}

const AccessDenied = ({ className }: PropTypes) => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1);   // Navigate to the previous page in the history
    };

    return (
        <div className={className}>
            <h1>Access Denied</h1>
            <div>
                <p>You don't have access to the requested page.</p>
                <button onClick={navigateBack}>Go Back</button>
            </div>
        </div>
    );
};

export default AccessDenied;
