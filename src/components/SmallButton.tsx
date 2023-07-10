import { useEffect, useState } from "react";
import { faLeftLong, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    buttonTitle: string;
    className?: string;
}

const SmallButton = ({ buttonTitle, className }: PropTypes) => {
    const [isButtonIcon, setIsButtonIcon] = useState(
        (buttonTitle === "Edit" || buttonTitle === "Delete") &&
            window.innerHeight >= 250 &&
            window.innerWidth >= 300 &&
            window.innerWidth <= 400
    );

    useEffect(() => {
        const handleResize = () => {
            setIsButtonIcon(
                (buttonTitle === "Edit" || buttonTitle === "Delete") &&
                    window.innerHeight >= 250 &&
                    window.innerWidth >= 300 &&
                    window.innerWidth <= 400
            );
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [buttonTitle]);

    if (buttonTitle === "Back")
        return (
            <div className={className}>
                <FontAwesomeIcon icon={faLeftLong} />
                <p>{buttonTitle}</p>
            </div>
        );
    // If device screen is small mobile, display edit icons instead of button text
    else if (isButtonIcon) {
        return (
            <div className={className}>
                {buttonTitle === "Delete" ? (
                    <FontAwesomeIcon icon={faTrash} />
                ) : (
                    <FontAwesomeIcon icon={faPenToSquare} />
                )}
            </div>
        );
    } else
        return (
            <div className={className}>
                <p>{buttonTitle}</p>
            </div>
        );
};

export default SmallButton;
