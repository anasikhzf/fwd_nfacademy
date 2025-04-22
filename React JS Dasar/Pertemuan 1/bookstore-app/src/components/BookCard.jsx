function BookCard({ image, description }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card shadow-sm" style={{ height: '300px' }}>
        <img
          src={image}
          className="card-img-top"
          alt="Thumbnail"
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column justify-content-between" style={{ overflow: 'hidden' }}>
          <p className="card-text small">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="btn btn-outline-secondary btn-sm m-2">View</button>
              <button className="btn btn-outline-secondary btn-sm">Edit</button>
            </div>
            <span className="text-muted small">9 mins</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard
