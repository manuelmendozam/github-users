import React from "react";
import { Link } from "react-router-dom";

import logo from '../../static/logo.png'

const Header: React.FC = (): JSX.Element => (
    <div className="h-20 shadow-sm shadow-slate-300 flex items-center px-12">
        <Link to='/'>
            <img alt="Everlange Inc Logo" src={logo} className="h-12" />
        </Link>
    </div>
);

export default Header;