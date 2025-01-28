import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import "./App.css";

function App() {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 1000);
    useEffect(() => console.log(debouncedValue), [debouncedValue]);

    return (
        <div className="container">
            <input
                placeholder="Enter text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

export default App;
