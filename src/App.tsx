import React from 'react';

// Libraries
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Layout from './components/Layout';

// Utils
import { routes } from './utils/routes';

// Styles
import './App.css';
import './tailwind.css';

const queryClient = new QueryClient();


const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(route => (
              <Route path={route.path} element={route.component} key={`route-${route.id}`} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
