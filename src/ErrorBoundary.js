import React, { Component } from "react";

class ErroBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch() {
        console.log("error catched");
    }
    render() {
        if (this.state.hasError) {
            return <div> error handled </div>;
        }
        return this.props.children;
    }
}

export default ErroBoundary;
