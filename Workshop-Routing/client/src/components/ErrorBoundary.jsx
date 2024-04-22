import { Component } from "react";

export default class ErrorBoundary extends Component {
    static GetDerivedStateFromError(err) {
        console.log('getderived')
    }

    componentDidCatch(error, errorInfo) {
       console.log('lifecycle method')
    }

    render() {
        return this.props.children;
    }
}