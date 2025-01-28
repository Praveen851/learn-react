import { useState, useEffect, useRef } from "react";
import useThrottle from "./useThrottle";
import "./App.css";

function App() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const throttledScrollPosition = useThrottle(scrollPosition, 500);
    const appRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (appRef.current) {
                setScrollPosition(appRef.current.scrollTop);
            }
        };

        const container = appRef.current;
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={appRef} className="app">
            <header className="header">
                <h1>Scroll Throttling Example</h1>
                <p>Actual Scroll Position: {scrollPosition}px</p>
                <p>Throttled Scroll Position: {throttledScrollPosition}px</p>
            </header>
            <div className="content">
                <p>
                    Keep scrolling down to see the throttled scroll position
                    update!
                </p>
                <div className="filler"></div>
            </div>
        </div>
    );
}

export default App;
