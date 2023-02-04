import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'

// Components
import { Search } from "../Search";
import { UsersList } from "../UsersList";

// Types
import { SearchResponse, User } from "../../types";
import { getSearch, getUsers } from "../../api/request";

const HomePage = () => {
    const [page, setPage] = useState<number>(1);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [query, setQuery] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [usersList, setUsersList] = useState<User[]>([]);

    const searchParams = useCallback(() => {
        if (!query || query == "") return { keys: ['users', `${page}`], fn: getUsers };
        else return { keys: ['search', query, `${page}`], fn: getSearch };
    }, [query, page])

    const { isLoading, data } = useQuery(searchParams().keys, searchParams().fn)

    useEffect(() => {
        const response = data as SearchResponse;
        if (response?.errors || response?.message) {
            setError(response?.message || (response?.errors && response?.errors[0]?.code) || 'Unexpected Error');
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
                <Search setQuery={setQuery} />
            </div>
            <UsersList usersList={usersList} isLoading={isLoading} error={error} loadMore={handleLoadMore} totalResults={totalResults} />
        </div>
    );
};

export default HomePage;