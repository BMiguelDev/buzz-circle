import { Link } from "react-router-dom";
import { StyledSmallButton } from "./styles/SmallButton.styles";

interface PropTypes {
    path: string;
    className?: string;
}

const BackButton = ({ className, path }: PropTypes) => {
    return (
        <Link to={path} className={className}>
            <StyledSmallButton buttonTitle="🡸 Back" />
        </Link>
    );
};

export default BackButton;
