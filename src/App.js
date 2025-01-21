import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./pages/BookRoutes";
import "./App.css";

function App() {
    const location = useLocation();
    return (
        <>
            <Routes>
                <Route path="/books" element={<h1>Extra content</h1>}></Route>
            </Routes>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" state={"Hello Home!"}>
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
            {location.state}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

/* 
https://www.youtube.com/watch?v=Ul3y1LXxzdU
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
Lesson 8:
8) NavLink tag -> has all the features that Link tag has, additional props -> className, style, children all of these take
functions which expose active state of the link. Used for styling purpose based on the acive state.
9) All the NavLink components have .active className when it is active we can use that classname to style it with css.
10) Use `end` prop in NavLink to exactly match the path so that if the children paths are active then the parent path is also wont be active. 
Lesson 9:
11) Use Navigate component to immediately navigate to any path.
Lesson 10:
12) Use `useNavigate` hook to navigate to any path based on actions.
13) pass any values between `-1` to `-n` to the navigate function to navigate back.
Lesson12: Any value that is passed to state prop in Link/NavLink or through useNavigate config options -> state can
be accessed in the component by using `useLocation` hook. Used to pass data from one component to another.
Bonus:
14) `useHistory` is deprecated and `useNavigate` is used instead.
*/

export default App;
