import React from "react";

// Components
import UserCard from "./UserCard";

// Types
import { Error, User } from "../../types";

interface UsersListProps {
    usersList: User[];
    isLoading: boolean;
    loadMore: () => void;
    totalResults?: number;
    error?: string;
}

const UsersList: React.FC<UsersListProps> = ({ usersList, isLoading, error, loadMore }): JSX.Element => {

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>An error has occurred: {error}</p>

    return (
        <div>
            {usersList.length > 0
                ? usersList.map((user: User) => (
                    <UserCard user={user} key={`user-${user.id}`} />
                ))
                : <p>No results</p>
            }
            <button onClick={loadMore} disabled={usersList.length < 1}>
                Load More
            </button>
        </div>
    );
};

export default UsersList;