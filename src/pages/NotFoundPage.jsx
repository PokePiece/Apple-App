import React from 'react';
import { useRouteError } from 'react-router-dom';

function NotFoundPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>The page you're looking for doesn't exist.</p>
        </div>
    );
}

export default NotFoundPage;