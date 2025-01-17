import React from "react";

class Counter extends React.PureComponent {
    render() {
        console.log("Rendering Counter");
        return <h1>Count: {this.props.count}</h1>;
    }
}

export default function App() {
    const [count, setCount] = React.useState(0);
    const [otherState, setOtherState] = React.useState(false);

    console.log("Rendering App");
    /*
        Here if the setCount is changed then the App component will re-render and the Counter component will also re-render.
        But if the setOtherState is changed then the App component will re-render but the Counter component will not re-render.
        This is use of React.PureComponent
    */


    return (
        <div>
            <Counter count={count} />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setOtherState(!otherState)}>
                Toggle Other State
            </button>
        </div>
    );
}
