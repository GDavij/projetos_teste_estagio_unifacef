import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { DefaultLayout } from './layouts/DefaultLayout/defaultLayout';
import { Loader } from './components/Loader/Loader';

const LazyError = lazy(async () => import('./pages/error'));
const LazyHome = lazy(async () => import('./pages/home'));
const LazyEditora = lazy(async () => import('./pages/editora'));

export function Router() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <LazyHome />,
        },
        { path: '/editora', element: <LazyEditora /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
