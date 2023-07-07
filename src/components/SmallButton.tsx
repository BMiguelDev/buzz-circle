import React from "react";

interface PropTypes {
    buttonTitle: string;
    className?: string;
}

const SmallButton = ({ buttonTitle, className }: PropTypes) => {
    return <p className={className}>{buttonTitle}</p>;
};

export default SmallButton;
