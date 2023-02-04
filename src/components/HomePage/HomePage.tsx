import React, { useCallback, useEffect, useState } from "react";
import { QueryKey, useQuery } from '@tanstack/react-query'

// Components
import { Search } from "../Search";
import { UsersList } from "../UsersList";

// Types
import { SearchResponse, User } from "../../types";
import { getSearch } from "../../api/request";

const HomePage = () => {
    const [page, setPage] = useState<number>(1);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [query, setQuery] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [usersList, setUsersList] = useState<User[]>([]);

    const { isLoading, data } = useQuery({
        // @ts-ignore
        queryKey: ['users', query, `${page}`],
        queryFn: () => getSearch(page, query),
        keepPreviousData : true,
        enabled: !!query && query != ""
    });

    useEffect(() => {
        const response = data as SearchResponse;
        console.log('data: ', data)
        console.log('usersList: ', usersList)
        if (response?.errors || response?.message) {
            setError(response?.message || (response?.errors && response?.errors[0]?.code) || 'Unexpected Error');
        } else if (response?.items?.length) {
            console.log('entroz')
            setUsersList([...usersList, ...response.items]);
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
        setUsersList([]);
        setTotalResults(0);
        setQuery(query);
    } 

    return (
        <div>
            <div className="flex justify-between">
                <h1>Githut Users</h1>
                <Search handleSearch={setQuery} />
            </div>
            <UsersList usersList={usersList} isLoading={isLoading} query={!!query} error={error} loadMore={handleLoadMore} totalResults={totalResults} />
        </div>
    );
};

export default HomePage;