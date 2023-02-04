import React from "react";
import { Link } from "react-router-dom";

import { User } from "../../types";

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }): JSX.Element => (
    <div className="h-44 border rounded border-black p-6">
        <div className="flex items-center mb-6">
            <img alt={`user-${user.name}-avatar`} src={user.avatar_url} className="h-20 rounded-full mr-6" />
            <p>{user.login}</p>
        </div>
        <div className="flex justify-between">
            <a href={user.html_url} target="_blank" rel="nooopener">Go</a>
            <Link to={`/details/${user.login}`} state={{ userLogin: user.login }}>
                View profile
            </Link>
        </div>
    </div>
);

export default UserCard;