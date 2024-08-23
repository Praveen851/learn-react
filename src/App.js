import { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const balls = document.querySelectorAll(".ball-container");

        function onDragStart() {
            setTimeout(
                () => setTimeout(() => this.classList.add("invicible"), 0),
                0
            );
        }

        function onDragEnd(e) {
            this.classList.remove("dragging");
            this.style.position = "absolute";
            this.style.top = e.clientY - 82 + "px";
            this.style.left = e.clientX - 35 + "px";
        }
        if (balls) {
            balls.forEach((ball) => {
                ball.addEventListener("dragstart", onDragStart);
                ball.addEventListener("dragend", onDragEnd);
            });
        }

        document
            .querySelector(".App")
            .addEventListener("dragover", function (e) {
                e.preventDefault();
            });

        return () => {
            if (balls) {
                balls.forEach((ball) => {
                    ball.removeEventListener("dragstart", onDragStart);
                    ball.removeEventListener("dragend", onDragEnd);
                });
            }
        };
    }, []);

    return (
        <div className="App">
            <div id="red-ball" className="ball-container" draggable></div>
            <div id="green-ball" className="ball-container" draggable></div>
            <div id="blue-ball" className="ball-container" draggable></div>
            <div id="purple-ball" className="ball-container" draggable></div>
            <div id="pink-ball" className="ball-container" draggable></div>
        </div>
    );
}

export default App;
