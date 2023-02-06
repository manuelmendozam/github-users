import React from "react";
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

const UserDetail: React.FC = (): JSX.Element  => {
    const { state } = useLocation();

    const { isLoading, data } = useQuery([state.userLogin || ''], getUser);

    if (isLoading) return <p>Loading...</p>;

    if (!state.userLogin || state.userLogin == "") return <p>Wrong User</p>;

    const user: User = data;

    return (
        <div className="border rounded-3xl border-gray-300 px-10 py-12 md:grid gap-4 md:grid-cols-2 lg:grid-cols-[200px_1fr_1fr] grid-rows-[1fr_auto]">
            <div className="lg:row-span-2 px-8">
                <img alt={`user-${user.name}-avatar`} src={user.avatar_url} className="rounded-full mr-8" />
            </div>
            <div className="pt-8" >
                <h1 className="text-4xl mb-4">{user.name}</h1>
                <h2 className="text-2xl mb-6">{user.login}</h2>
                <p className="text-xl mb-6">{user.bio}</p>
            </div>
            <div className="pt-8 md:col-span-2 lg:col-span-1" >
                <a href={user.html_url} target="_blank" rel="nooopener" className="flex items-center">
                    <Icon src={github} alt="github-logo" /> {user.login}
                </a>
                <div className="grid grid-cols-3 items-center p-4 bg-gray-100 rounded-3xl my-6 w-full xl:w-3/4">
                    <div className="text-center">
                        <p className="text-md mb-4">Repos</p>
                        <p className="text-3xl font-medium">{user.public_repos}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-md mb-4">Followers</p>
                        <p className="text-3xl font-medium">{user.followers}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-md mb-4">Following</p>
                        <p className="text-3xl font-medium">{user.following}</p>
                    </div>
                </div>
            </div>
            <div className="lg:pt-8" >
                {user.location && <div className="flex mb-6 items-center">
                    <Icon src={location} alt="location-logo" />
                    <p>{user.location}</p>
                </div>}
                {user.email && <div className="flex mb-6 items-center">
                    <Icon src={mail} alt="mail-logo" />
                    <p>{user.email}</p>
                </div>}
            </div>
            <div className="lg:pt-8" >
                {user.twitter_username && <div className="flex mb-6 items-center">
                    <Icon src={twitter} alt="twitter-logo" />
                    <p>{user.twitter_username}</p>
                </div>}
                {user.blog && <div className="flex mb-6 items-center">
                    <Icon src={link} alt="link-logo" />
                    <p>{user.blog}</p>
                </div>}
            </div>
        </div>
    );
};

export default UserDetail;