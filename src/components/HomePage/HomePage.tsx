import React, { useEffect, useRef, useState } from "react";
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

    const userListRef = useRef<User[]>([]);

    const { isLoading, error: requestError, data } = useQuery({
        queryKey: ['users', query, `${page}`],
        queryFn: () => query != '' ? getSearch(page, query) : getUsers(page),
    });

    useEffect(() => {
        const response = data as SearchResponse;
        if (response?.errors || response?.message) {
            setError(response?.message || (response?.errors && response?.errors[0]?.code) || (requestError as Error)?.message || 'Unexpected Error');
        } else if (response?.items?.length) {
            userListRef.current = query != '' ? [...userListRef.current, ...response.items] : response.items;
            setUsersList(userListRef.current);
            setTotalResults(response.total_count || 0);
        } else {
            setUsersList([]);
            setTotalResults(0);
        }
    }, [data]);

    const handleLoadMore = () => {
        setPage(page + 1)
    };

    const handleSearch = (query: string) => {
        userListRef.current = [];
        setUsersList([]);
        setTotalResults(0);
        setPage(1);
        setQuery(query);
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between">
                <h1 className="text-3xl w-full md:w-8/12 mb-4 md:m-0" >Githut Users</h1>
                <Search handleSearch={handleSearch} />
            </div>
            <UsersList usersList={usersList} isLoading={isLoading} error={error} loadMore={handleLoadMore} totalResults={totalResults} />
        </div>
    );
};

export default HomePage;