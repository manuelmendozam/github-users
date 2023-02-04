import React from "react";

// Components
import Header from "./Header";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
    <div className="bg-white">
        <Header />
        {children}
    </div>
);

export default Layout;