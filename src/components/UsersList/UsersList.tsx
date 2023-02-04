import React from "react";

// Components
import UserCard from "./UserCard";

// Types
import { User } from "../../types";

// Controls
import Button from "../../controls/Button";

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
        <div className="w-full h-40 flex items-center justify-center">
            Please search for an user
        </div>
    )

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>An error has occurred: {error}</p>

    return (
        <div className="flex flex-col items-end">
            <div className="grid grid-cols-3 gap-4 py-8 w-full">
                {usersList.length > 0
                    ? usersList.map((user: User) => (
                        <UserCard user={user} key={`user-${user.id}`} />
                    ))
                    : <p>No results</p>
                }
            </div>
            <Button onClick={loadMore} disabled={usersList.length < 1 || usersList.length >= totalResults}>
                Load More
            </Button>
        </div>
    );
};

export default UsersList;