import React from "react";

// Components
import Header from "./Header";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => (
    <div className="bg-white" >
        <Header />
        <div className="px-4 py-12 container mx-auto" >
            {children}
        </div>
    </div>
);

export default Layout;