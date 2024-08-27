import { Link, Outlet, useSearchParams } from "react-router-dom";
export function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
    const value = searchParams.get("n");
    return (
        <>
            <Link to={"/books/1"}>book1</Link>
            <br />
            <Link to={"/books/2"}>book2</Link>
            <br />
            <Link to={`/books/${value}`}>book{value}</Link>
            <br />
            <Link to={"/books/new"}>new book</Link>
            <Outlet context={{ greet: "Hello world!" }} />
            <input
                type="number"
                value={value}
                onChange={(e) => setSearchParams({ n: e.target.value })}
            />
        </>
    );
}

/*
Note: 
1) Use Outlet component to display the actual component that refers the current path
2) You can share date using the context prop inside Outlet and use it across any of the child component, 
this state acts as a context.
Lesson11:
3) `useSearcParams` hooks allow you to set the search parameters in the url, which u can also access in your component logic
during runtime.
*/
