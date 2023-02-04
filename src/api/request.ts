import { API_SEARCH_URL, ITEMS_PER_PAGE } from './../utils/CONSTANS';

export const getUsers = ({ queryKey }: { queryKey: string[] }) => fetch(`${API_SEARCH_URL}?q=${queryKey[1]}&page=${queryKey[2]}&per_page=${ITEMS_PER_PAGE}`).then(
    (res) => res.json(),
)
