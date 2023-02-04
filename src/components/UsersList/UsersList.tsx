import React from "react";

// Components
import UserCard from "./UserCard";

// Types
import { Error, User } from "../../types";

interface UsersListProps {
    usersList: User[];
    isLoading: boolean;
    loadMore: () => void;
    totalResults: number;
    query: boolean;
    error?: string;
}

const UsersList: React.FC<UsersListProps> = ({ usersList, isLoading, error, loadMore, totalResults, query }): JSX.Element => {
    
    if (!query) return (
        <div>
            Please search for an user
        </div>
    )

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
            <button onClick={loadMore} disabled={usersList.length < 1 || usersList.length >= totalResults}>
                Load More
            </button>
        </div>
    );
};

export default UsersList;