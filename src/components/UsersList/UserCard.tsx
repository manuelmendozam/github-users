import React from "react";
import { Link } from "react-router-dom";

import { User } from "../../types";

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }): JSX.Element => (
    <div>
        <div>
            <img alt={`user-${user.name}-avatar`} src={user.avatar_url} />
            <p>{user.login}</p>
        </div>
        <div>
            <a href={user.html_url} target="_blank" rel="nooopener">Go</a>
            <Link to={`/details/${user.login}`} state={{ userLogin: user.login }}>
                View profile
            </Link>
        </div>
    </div>
);

export default UserCard;