import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./pages/BookRoutes";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/books" element={<h1>Extra content</h1>}></Route>
            </Routes>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            style={({ isActive }) => {
                                return isActive
                                    ? { color: "green" }
                                    : { color: "violet" };
                            }}
                            to="/"
                        >
                            {({ isActive }) =>
                                isActive ? "Active Home" : "Inactive Home"
                            }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to="/books">
                            Books
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

/* 
Note:
Lesson  5:
1) use index prop to set the component for the root path.
2) You can remove the path of the parent "/books" then we can use it wrap any components without a common parent. Useful for showing navbar.
3) To show extra content use route component to render multiple element for the same route.
4) Use location prop in the routes to hardcode the current location.
Lesson 7:
5) Link tag -> `replace` prop to replace the current component with the new navigated component.
6) Link tag -> `reloadDocument` prop to reload and render the new component.
7) Link tag -> `state` prop to pass data that wont shown in url bar.
8) NavLink tag -> has all the features that Link tag has, additional props -> className, style, children all of these take
functions which expose active state of the link. Used for styling purpose based on the acive state.
9) All the NavLink components have .active className when it is active we can use that classname to style it with css.
10) Use `end` prop in NavLink to exactly match the path so that if the children paths are active then the parent path is also wont be active. 
*/

export default App;
