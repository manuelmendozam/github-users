import React, { useState } from "react";

// Controls
import Icon from "../../controls/Icon";

// Images
import search from '../../static/icon-search.png';

interface SearchProps {
    handleSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearch }): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") handleSearch(value);
    };

    return (
        <div className="w-full md:w-4/12 md:ml-8 border p-2 border-gray-300 rounded-md flex items-center">
            <Icon src={search} alt="search-icon" className="h-5 mr-4" />
            <input
                className="mr-4 w-full"
                id="users-search"
                placeholder="Enter username or email"
                value={value}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
        </div>
    );
};

export default Search;