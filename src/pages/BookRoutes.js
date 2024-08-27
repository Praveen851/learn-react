import { Route, Routes } from "react-router-dom";
import { BookList } from "./BookList";
import { BookLayout } from "./BookLayout";
import { Book } from "./Book";
import { NewBook } from "./NewBook";

export function BookRoutes() {
    return (
        <>
            <Routes>
                <Route element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>
    );
}
