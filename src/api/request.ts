import { API_USERS_URL, API_SEARCH_URL, ITEMS_PER_PAGE, API_DETAIL_URL } from './../utils/CONSTANS';

export const getUsers = async ({ queryKey }: { queryKey: string[] }) => {
    const response = await fetch(`${API_USERS_URL}?page=${queryKey[1]}&per_page=${ITEMS_PER_PAGE}`);
    const data = await response.json();

    return new Promise((resolve) => {
        if (data.message) resolve(data);
        else {
            resolve({
                items: data,
                total_count: data.length + 1
            })
        }
    })
}

export const getSearch = ({ queryKey }: { queryKey: string[] }) => fetch(`${API_SEARCH_URL}?q=${queryKey[1]}&page=${queryKey[2]}&per_page=${ITEMS_PER_PAGE}`).then(
    (res) => res.json(),
);

export const getUser = ({ queryKey }: { queryKey: string[] }) => fetch(`${API_DETAIL_URL}${queryKey[0]}`).then(
    (res) => res.json(),
);
