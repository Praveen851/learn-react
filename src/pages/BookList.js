import { Link } from "react-router-dom";

export function BookList() {
    return (
        <div>
            <h1>BookList</h1>
            <ul>
                <li>
                    <Link to={"/book/1"}>book1</Link>
                </li>
                <li>
                    <Link to={"/book/2"}>book2</Link>
                </li>
                <li>
                    <Link to={"/book/3"}>book3</Link>
                </li>
            </ul>
        </div>
    );
}
