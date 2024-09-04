import React, { useState } from "react";

function MainScreen() {
    const [count, setCount] = useState(0);
    if (count === 5) throw new Error("Manual error after clicking 5 times");
    //if the error is thrown inside event handlers it wont be captured by the errorboundary component
    //by default the error will be thrown in the dev mode, this is the intended behaviour.
    const handleOnClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <div>Counter: {count}</div>
            <button onClick={handleOnClick}>click here</button>
        </>
    );
}

export default MainScreen;
