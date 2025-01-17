import React from "react";

// Higher-Order Component
const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

// Regular Component
const DataDisplay = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Enhanced Component with HOC
const DataDisplayWithLoading = withLoading(DataDisplay);

// Usage
export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return <DataDisplayWithLoading isLoading={isLoading} data={data} />;
}
