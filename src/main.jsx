import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Your main App component

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


import HomePage from './pages/HomePage.jsx'; 
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Your App component can serve as a layout
    errorElement: <NotFoundPage />, // Catch-all for undefined routes
    children: [
      {
        index: true, // This makes HomePage the default child route for '/'
        element: <HomePage />,
      },
      
      {
        path: 'about', // Path relative to the parent '/'
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      }, 

    ],
  },
  // If you have routes that don't share the <App /> layout, you can define them here
  // {
  // path: '/standalone',
  // element: <SomeOtherStandaloneComponent />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);