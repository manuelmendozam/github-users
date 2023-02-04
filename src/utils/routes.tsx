import { Route } from "../types";

// Components
import { HomePage } from "../components/HomePage";
import { UserDetail } from "../components/UserDetails";

export const routes: Route[] = [
    {
        id: 'home',
        name: 'Github Users',
        path: '/',
        component: <HomePage />
    },
    {
        id: 'details',
        name: 'User profile',
        path: '/details/:userLogin',
        component: <UserDetail />
    },
]