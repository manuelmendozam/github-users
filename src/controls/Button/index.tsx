import React from "react";

interface ButtonProps {
    children: string;
    onClick: () => void;
    disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }): JSX.Element => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="border rounded border-black p-2 hover:bg-black hover:text-white disabled:opacity-50"
    >
        {children}
    </button>
);

export default Button;