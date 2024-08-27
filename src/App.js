import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
    return (
        <>
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/book/:id" element={<Book />} />
                <Route path="/book/new" element={<NewBook />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

/* 
Note:
1) Prior to react router 6 /book/new would have also treated it as dynamic and hence <Book/> component would have been rendered
instead of <NewBook/> component based on the order 
2) when the path is set "*" it matches to anything in the url, so we can use it to render 404 page by placing it at last.
*/

export default App;
