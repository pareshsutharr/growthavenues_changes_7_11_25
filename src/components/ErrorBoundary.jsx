import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    try {
      import("../utils/logger").then(({ log }) => log.error(error, { where: "ErrorBoundary", info }));
    } catch {}
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="text-center p-4" style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb" }}>
                <h2 className="mb-2" style={{ color: "#044B73" }}>Something went wrong</h2>
                <p className="text-secondary">An unexpected error occurred. Please try again.</p>
                <button className="btn btn-primary" onClick={this.handleReset}>Try again</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

