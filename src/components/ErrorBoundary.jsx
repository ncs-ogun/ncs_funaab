import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Check for specific Firebase auth errors
      const isFirebaseAuthError = this.state.error?.code?.startsWith('auth/');
      
      if (isFirebaseAuthError) {
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-16 px-4">
            <div className="container max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h2>
                <p className="text-gray-600 mb-6">
                  {this.state.error.code === 'auth/invalid-api-key'
                    ? 'There was an issue with the authentication configuration. Please try again later.'
                    : 'An authentication error occurred. Please try again.'}
                </p>
                <div className="space-y-4">
                  <Link
                    to="/"
                    className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Return Home
                  </Link>
                  <button
                    onClick={() => window.location.reload()}
                    className="block w-full px-6 py-2 text-green-600 hover:text-green-700"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }

      // Generic error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-16 px-4">
          <div className="container max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
              <p className="text-gray-600 mb-6">
                We apologize for the inconvenience. Please try again later.
              </p>
              <div className="space-y-4">
                <Link
                  to="/"
                  className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Return Home
                </Link>
                <button
                  onClick={() => window.location.reload()}
                  className="block w-full px-6 py-2 text-green-600 hover:text-green-700"
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 