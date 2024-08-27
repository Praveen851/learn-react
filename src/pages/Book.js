import { useOutletContext, useParams } from "react-router-dom";

export function Book() {
    const { greet } = useOutletContext();
    const { id } = useParams();

    return (
        <h1>
            Book {id} {greet}
        </h1>
    );
}
