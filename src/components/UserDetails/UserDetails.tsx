import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getUser } from "../../api/request";
import { User } from "../../types";

const UserDetail = () => {
    const { state } = useLocation();

    const { isLoading, data } = useQuery([state.userLogin || ''], getUser);

    if (isLoading) return <p>Loading...</p>;

    if (!state.userLogin || state.userLogin == "") return <p>Wrong User</p>;

    const user: User = data;

    return (
        <div>
            <img alt={`user-${user.name}-avatar`} src={user.avatar_url} />
            <div>
                <h1>{user.name}</h1>
                <h2>{user.login}</h2>
                <p>{user.bio}</p>
                <div>
                    Location
                    <p>{user.location}</p>
                </div>
                <div>
                    Mail
                    <p>{user.email}</p>
                </div>
            </div>
            <div>
                <a href={user.html_url} target="_blank" rel="nooopener">Go {user.login}</a>
                <div>
                    <div>
                        <span>Repos</span>
                        <p>{user.public_repos}</p>
                    </div>
                    <div>
                        <span>Followers</span>
                        <p>{user.followers}</p>
                    </div>
                    <div>
                        <span>Following</span>
                        <p>{user.following}</p>
                    </div>
                </div>
                <div>
                    Twitter
                    <p>{user.twitter_username}</p>
                </div>
                <div>
                    Blog
                    <p>{user.blog}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;