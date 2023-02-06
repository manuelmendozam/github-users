import React from "react";
import { Link } from "react-router-dom";

// Controls
import Icon from "../../controls/Icon";

// Types
import { User } from "../../types";

// Images
import github from '../../static/icon-github.png';

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }): JSX.Element => (
    <div className="border rounded-xl border-gray-300 px-6 py-5">
        <div className="flex items-center mb-6">
            <img alt={`user-${user.name}-avatar`} src={user.avatar_url} className="h-16 rounded-full mr-6" />
            <p className="text-xl font-medium text-black">{user.login}</p>
        </div>
        <div className="flex justify-between items-center">
            <a href={user.html_url} target="_blank" rel="nooopener">
                <Icon src={github} alt="github-logo" /> 
            </a>
            <Link to={`/details/${user.login}`} state={{ userLogin: user.login }} className="text-[#2ca98d]">
                View profile
            </Link>
        </div>
    </div>
);

export default UserCard;