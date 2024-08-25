import { useState } from "react";
import { flushSync } from "react-dom";

function App() {
    /* 
    Concept of automatic batching in React 18.
  Batching is a react feature that existed even before react 18, it helps us to avoid multiple re-renders for each state change inside a single event handler function. 
  Inside an event handler it waits until all the state updates are done and then it re-renders the ui.
  It is limited to event handlers alone. It doesn’t batch the state updates inside timeouts, promises, etc.
  With React 18, updates inside of promises, setTimeout, native event handlers, or any other event are getting batched automatically. And the best part is that you don’t have to add anything to your code to use automatic batching, React does it automatically after you upgrade your project’s React version to 18.
  React introduces flushSync() function to stop automatic batching when necessary. You can import it from react-dom 
  reference : `https://javascript.plainenglish.io/react-18-automatic-batching-3cf7bf545ab6`
  */
    const [name, setName] = useState("");
    const [clicked, setClicked] = useState(false);

    console.log("Rerendered", clicked, name); //check console after clicking the button

    const handleOnclick = () => {
        flushSync(() => setName("old")); // here flushSync is used to stop automatic batching hence after clicking the button the component is rendered two times( flush sync immediately updates states and re-renders the component without automatic batching)
        setClicked((prev) => !prev);
    };

    return (
        <div>
            <button onClick={handleOnclick}>Click</button>
            <input onChange={(event) => setName(event.target.value)}></input>
            <div>name {name} </div>
        </div>
    );
}

export default App;
