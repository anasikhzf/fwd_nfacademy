function BookItem({ image, description }) {
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
  );
}

function Book() {
  const books = [
    {
      image: "https://storage.googleapis.com/a1aa/image/HJRkHbsyqG89i_6tRwPZY0OtwsRPXp-KFhJJbILjGjs.jpg",
      description: "This is a wider with supporting text below as a natural lead-in to additional content."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/wFF_WzeAIK8Ec848_Jnf19U9yIIIqsIYXJE3s1kgQOM.jpg",
      description: "Atomic Habits: Perubahan kecil yang memberikan hasil luar biasa."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/HJRkHbsyqG89i_6tRwPZY0OtwsRPXp-KFhJJbILjGjs.jpg",
      description: "Start With Why: Temukan tujuan dari apa yang kamu lakukan."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/wFF_WzeAIK8Ec848_Jnf19U9yIIIqsIYXJE3s1kgQOM.jpg",
      description: "The Psychology of Money: Mindset yang tepat dalam mengelola keuangan."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/HJRkHbsyqG89i_6tRwPZY0OtwsRPXp-KFhJJbILjGjs.jpg",
      description: "Deep Work: Kekuatan fokus di era yang penuh gangguan."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/wFF_WzeAIK8Ec848_Jnf19U9yIIIqsIYXJE3s1kgQOM.jpg",
      description: "Rich Dad Poor Dad: Pelajaran keuangan dari dua ayah."
    }
  ];

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">Best Selling Book</h2>
        <p className="text-muted">
          Something short and leading about the collection below—its contents, the creator, etc.
        </p>
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button className="btn btn-primary">Views</button>
          <button className="btn btn-secondary">Other Book</button>
        </div>
      </div>

      <div className="row g-4">
        {books.map((book, idx) => (
          <BookItem key={idx} image={book.image} description={book.description} />
        ))}
      </div>
    </>
  );
}

export default Book;