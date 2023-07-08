import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    buttonTitle: string;
    className?: string;
}

const SmallButton = ({ buttonTitle, className }: PropTypes) => {
    if (buttonTitle === "Back")
        return (
            <div className={className}>
                <FontAwesomeIcon icon={faLeftLong} /> 
                <p>{buttonTitle}</p>
            </div>
        );
    else return <div className={className}><p>{buttonTitle}</p></div>;
};

export default SmallButton;
