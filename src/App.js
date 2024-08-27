import { Link, Route, Routes, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";

import { NotFound } from "./pages/NotFound";

import { Book } from "./pages/Book";
import { BookRoutes } from "./pages/BookRoutes";
import { BookList } from "./pages/BookList";
import { NewBook } from "./pages/NewBook";

function App() {
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/books",
            element: <BookList />,
            children: [
                {
                    path: ":id",
                    element: <Book />,
                },
                { path: "new", element: <NewBook /> },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
    return (
        <>
            {/* <Routes>
                <Route path="/books" element={<h1>Extra content</h1>}></Route>
            </Routes> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            {routes}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes> */}
        </>
    );
}

/* 
Note:
1) use index prop to set the component for the root path
2) You can remove the path of the parent "/books" then we can use it wrap any components without a common parent. Useful for showing navbar.
3) To show extra content use route component to render multiple element for the same route.
4) Use location prop in the routes to hardcode the current location 
*/

export default App;
