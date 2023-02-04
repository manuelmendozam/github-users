import React from "react";

import logo from '../../static/logo.png'

const Header: React.FC = (): JSX.Element => (
    <div className="h-20 shadow-sm shadow-slate-300 flex items-center px-12">
        <img alt="Everlange Inc Logo" src={logo} className="h-12" />
    </div>
);

export default Header;