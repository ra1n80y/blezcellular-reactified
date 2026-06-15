import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // In production, you could log to an error reporting service here.
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-5 text-white">
          <h2>Something went wrong.</h2>
          <p className="text-muted">
            Please try refreshing the page. If the problem persists, contact support.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
