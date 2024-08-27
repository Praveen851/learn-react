import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// https://www.youtube.com/watch?v=Ul3y1LXxzdU

/* 
othere router
HashRouter -> main url remains the same, other changes in the url are not considered as a part of the url rather it is considered as a hash.
unStable_HistoryRouter -> allows us to take control over the history element of react-router. Provide us direct access to manipulate as we need.
MemoryRouter -> stores the path in memory instead of changing in the url. Used to run test.
StaticRouter -> specifically for working on the server. Hardcodes the url in the browser.
*/
