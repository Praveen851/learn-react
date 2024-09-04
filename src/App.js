import "./App.css";
import MainScreen from "./MainScreen";
import ErrorBoundary from "./ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <MainScreen />
        </ErrorBoundary>
    );
}

export default App;
