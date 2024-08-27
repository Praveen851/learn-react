import { Link, Outlet } from "react-router-dom";
export function BookLayout() {
    return (
        <>
            <Link to={"/books/1"}>book1</Link>
            <br />
            <Link to={"/books/2"}>book2</Link>
            <br />
            <Link to={"/books/new"}>new book</Link>
            <Outlet context={{ greet: "Hello world!" }} />
        </>
    );
}

/*
Note: 
1) Use Outlet component to display the actual component that refers the current path
2) You can share date using the context prop inside Outlet and use it across any of the child component, 
this state acts as a context.

*/
