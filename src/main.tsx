import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/globals.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "devices",
        element: <h1>TEST</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
