import { API_USERS_URL, API_SEARCH_URL, ITEMS_PER_PAGE, API_DETAIL_URL } from './../utils/CONSTANS';

export const getUsers = async (page: number = 1) => {
    const response = await fetch(`${API_USERS_URL}?page=${page}&per_page=${ITEMS_PER_PAGE * page}`);
    const data = await response.json();

    return new Promise((resolve) => {
        if (data.message) resolve(data);
        else {
            resolve({
                items: data,
                total_count: ITEMS_PER_PAGE * page + 1
            })
        }
    })
}

export const getSearch = (page: number = 1, query: string) => fetch(`${API_SEARCH_URL}?q=${query}&page=${page}&per_page=${ITEMS_PER_PAGE}`).then(
    (res) => res.json(),
);

export const getUser = ({ queryKey }: { queryKey: string[] }) => fetch(`${API_DETAIL_URL}${queryKey[0]}`).then(
    (res) => res.json(),
);
