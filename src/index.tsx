import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Prices from "./pages/prices";
import Schedule from "./pages/schedule";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/prices",
        element: <Prices />
    },
    {
        path: "/schedule",
        element: <Schedule />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
