import { Component } from "react";


export default class ErrorBoundary extends Component {

    constructor () {
        super()

        this.state = {
            hasError: false,

        }
    }

    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError')
        return {
            hasError: true,
        }
    }

    componentDIdCatch(error, errorInfo) {
        console.log('ComponentDidCatch')
        // TODO logging to log the crash report.
    }  

    render() {
        if (this.state.hasError) {
        return <h1>404</h1>
    }


        return this.props.children;
    }
}