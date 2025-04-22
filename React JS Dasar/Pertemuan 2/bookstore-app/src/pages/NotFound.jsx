function NotFound() {
    return (
      <div className="container text-center py-5">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    );
  }
  export default NotFound;