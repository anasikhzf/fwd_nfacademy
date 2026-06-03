import React, { useState } from 'react';
import booksData from '../utils/books';

function BookItem({ image, description }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card shadow-sm" style={{ height: '300px' }}>
        <img src={image} className="card-img-top" alt="Thumbnail" style={{ height: '150px', objectFit: 'cover' }} />
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
  const [books, setBooks] = useState(booksData);

  // Optional: tambah fitur untuk menambahkan buku baru
  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: 2025,
      description: "Deskripsi buku baru",
      image: "https://storage.googleapis.com/a1aa/image/HJRkHbsyqG89i_6tRwPZY0OtwsRPXp-KFhJJbILjGjs.jpg"
    };
    setBooks(prev => [...prev, newBook]);
  };

  return (
    <>
      <div className="text-center mb-5">
        <h2 className="fw-bold">Best Selling Book</h2>
        <p className="text-muted">Koleksi buku terbaik untuk dibaca dan dipelajari.</p>
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button className="btn btn-primary" onClick={handleAddBook}>+ Tambah Buku</button>
        </div>
      </div>

      <div className="row g-4">
        {books.map((book) => (
          <BookItem key={book.id} image={book.image} description={book.description} />
        ))}
      </div>
    </>
  );
}

export default Book;
