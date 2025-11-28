import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  HomeLayout,
  Login,
  Orders,
  Products,
  SingleProduct,
  Register
} from './pages';
import { ErrorElement } from './components';

//loaders
import { loader as homeLoader } from './pages/Home';

//actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
        loader: homeLoader
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'orders',
        element: <Orders />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
