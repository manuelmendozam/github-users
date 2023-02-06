import React from "react";

interface IconProps {
    src: string;
    alt: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }): JSX.Element => (
    <img
        src={src}
        alt={alt}
        className={className ?? 'h-8 mr-4'}
    />
);

export default Icon;