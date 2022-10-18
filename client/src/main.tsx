import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import Layout from "./layouts/body"
import Error from "./pages/Error"
import About from "./pages/About"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: "about",
        element: <About />,
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    </React.StrictMode>
)
