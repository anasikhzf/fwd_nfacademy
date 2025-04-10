import BookCard from './BookCard'

function BestSellingSection() {
  const books = [
    {
      image: "https://storage.googleapis.com/a1aa/image/HJRkHbsyqG89i_6tRwPZY0OtwsRPXp-KFhJJbILjGjs.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/HJRkHbsyqG89i_6tRwPZY0OtwsRPXp-KFhJJbILjGjs.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content."
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/HJRkHbsyqG89i_6tRwPZY0OtwsRPXp-KFhJJbILjGjs.jpg",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content."
    }
  ]

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
          <BookCard key={idx} image={book.image} description={book.description} />
        ))}
      </div>
    </>
  )
}

export default BestSellingSection