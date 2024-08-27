import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(
            () => navigate("/", { state: "Error page not founc!" }),
            1000
        );
    }, []);

    return <h1>Not Found</h1>;
}
