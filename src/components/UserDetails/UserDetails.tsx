import React from "react";

// Libraries
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

// Request
import { getUser } from "../../api/request";

// Types
import { User } from "../../types";

// Controls
import Icon from "../../controls/Icon";

// Images
import github from '../../static/icon-github.png';
import twitter from '../../static/icon-twitter.png';
import location from '../../static/icon-location.png';
import mail from '../../static/icon-mail.png';
import link from '../../static/icon-link.png';

const UserDetail = () => {
    const { state } = useLocation();

    const { isLoading, data } = useQuery([state.userLogin || ''], getUser);

    if (isLoading) return <p>Loading...</p>;

    if (!state.userLogin || state.userLogin == "") return <p>Wrong User</p>;

    const user: User = data;

    return (
        <div className="border rounded-3xl border-black px-6 py-12 flex">
            <div className="w-2/12 p-8">
                <img alt={`user-${user.name}-avatar`} src={user.avatar_url} className="rounded-full mr-8" />
            </div>
            <div className="w-5/12" >
                <h1 className="text-5xl mb-8">{user.name}</h1>
                <h2 className="text-2xl mb-6">{user.login}</h2>
                <p className="text-xl mb-6">{user.bio}</p>
                {user.location && <div className="flex mb-6">
                    <Icon src={location} alt="location-logo" />
                    <p>{user.location}</p>
                </div>}
                {user.email && <div className="flex mb-6">
                    <Icon src={mail} alt="mail-logo" />
                    <p>{user.email}</p>
                </div>}
            </div>
            <div className="w-5/12" >
                <a href={user.html_url} target="_blank" rel="nooopener" className="flex">
                    <Icon src={github} alt="github-logo" /> {user.login}
                </a>
                <div className="flex p-12 bg-slate-100 rounded-3xl my-6">
                    <div className="mr-12">
                        <p className="text-xl mb-4">Repos</p>
                        <p>{user.public_repos}</p>
                    </div>
                    <div className="mr-12">
                        <p className="text-xl mb-4">Followers</p>
                        <p>{user.followers}</p>
                    </div>
                    <div className="mr-12">
                        <p className="text-xl mb-4">Following</p>
                        <p>{user.following}</p>
                    </div>
                </div>
                {user.twitter_username && <div className="flex mb-6">
                    <Icon src={twitter} alt="twitter-logo" />
                    <p>{user.twitter_username}</p>
                </div>}
                {user.blog && <div className="flex mb-6">
                    <Icon src={link} alt="link-logo" />
                    <p>{user.blog}</p>
                </div>}
            </div>
        </div>
    );
};

export default UserDetail;