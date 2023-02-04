import React from "react";

interface IconProps {
    src: string;
    alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }): JSX.Element => (
    <img
        src={src}
        alt={alt}
        className="h-4 mr-4"
    />
);

export default Icon;