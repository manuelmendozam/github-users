import React, { Dispatch, SetStateAction, useState } from "react";

interface SearchProps {
    setQuery: Dispatch<SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({ setQuery }): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") setQuery(value);
    };

    return (
        <div>
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