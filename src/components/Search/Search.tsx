import React, { Dispatch, SetStateAction, useState } from "react";

interface SearchProps {
    handleSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearch }): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch(value);
    };

    return (
        <div className="border p-2 border-black">
            <input
                className=""
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