import { API_SEARCH_URL, ITEMS_PER_PAGE, API_DETAIL_URL } from './../utils/CONSTANS';

export const getUsers = ({ queryKey }: { queryKey: string[] }) => fetch(`${API_SEARCH_URL}?q=${queryKey[1]}&page=${queryKey[2]}&per_page=${ITEMS_PER_PAGE}`).then(
    (res) => res.json(),
);

export const getUser = ({ queryKey }: { queryKey: string[] }) => fetch(`${API_DETAIL_URL}${queryKey[0]}`).then(
    (res) => res.json(),
);
