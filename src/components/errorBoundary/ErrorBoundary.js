import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    // Исправленное написание названия метода
    componentDidCatch(error, errorInfo) {
        // Логирование ошибки и дополнительной информации об ошибке
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            // Возвращаем сообщение об ошибке, если произошла ошибка
            return <h2>Something went wrong. Please try again later.</h2>;
        }
        // Возвращаем дочерние компоненты, если ошибки нет
        return this.props.children;
    }
}

export default ErrorBoundary;
