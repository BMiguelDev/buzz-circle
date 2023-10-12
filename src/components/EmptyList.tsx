import { StyledRedirectButton } from "./styles/RedirectButton.styles";

interface PropTypes {
    className?: string;
    textValue: string;
    redirectPath: string;
}

const EmptyList = ({ className, textValue, redirectPath }: PropTypes) => {
    return (
        <div className={className}>
            <h4>No {textValue} yet</h4>
            <StyledRedirectButton path={redirectPath} />
        </div>
    );
};

export default EmptyList;
