import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'

// Components
import { Search } from "../Search";
import { UsersList } from "../UsersList";

// Types
import { Error, SearchResponse, User } from "../../types";
import { getUsers } from "../../api/request";

const HomePage = () => {
    const [page, setPage] = useState<number>(1);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [query, setQuery] = useState<string>('gabriel');
    const [error, setError] = useState<string>('');
    const [usersList, setUsersList] = useState<User[]>([]);

    const { isLoading, data } = useQuery(['users', query, `${page}`], getUsers)

    useEffect(() => {
        const response = data as SearchResponse;
        if (response?.errors && response?.message) {
            setError(response.message);
        } else if (response?.items?.length) {
            setUsersList([...usersList, ...response.items]);
            setTotalResults(response.total_count || 0);
        } else {
            setUsersList([]);
            setTotalResults(0);
        }
    }, [data]);

    const handleLoadMore = () => {

    };

    return (
        <div>
            <div className="flex justify-between">
                <h1>Githut Users</h1>
                <Search />
            </div>
            <UsersList usersList={usersList} isLoading={isLoading} error={error} loadMore={handleLoadMore} />
        </div>
    );
};

export default HomePage;