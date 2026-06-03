<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Sales</title>
    <!-- Bootstrap CDN untuk styling -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h1 class="text-center text-primary mb-4">Book Sales</h1>

    <?php
    // Array yang berisi informasi buku
    $books = [
        ["title" => "The Great Gatsby", "author" => "F. Scott Fitzgerald", "price" => 15.99],
        ["title" => "1984", "author" => "George Orwell", "price" => 12.99],
        ["title" => "To Kill a Mockingbird", "author" => "Harper Lee", "price" => 18.99],
        ["title" => "Moby Dick", "author" => "Herman Melville", "price" => 22.99],
    ];

    // Fungsi untuk menampilkan buku dalam tabel
    function displayBooks($books) {
        echo '<table class="table table-bordered table-hover">';
        echo '<thead class="thead-dark"><tr><th>Title</th><th>Author</th><th>Price</th></tr></thead>';
        echo '<tbody>';
        
        foreach ($books as $book) {
            echo '<tr>';
            echo '<td>' . $book["title"] . '</td>';
            echo '<td>' . $book["author"] . '</td>';
            echo '<td>$' . number_format($book["price"], 2) . '</td>';
            echo '</tr>';
        }

        echo '</tbody>';
        echo '</table>';
    }

    // Kelas untuk Buku dengan konsep OOP
    class Book {
        public $title;
        public $author;
        protected $price;

        // Konstruktor
        public function __construct($title, $author, $price) {
            $this->title = $title;
            $this->author = $author;
            $this->price = $price;
        }

        // Metode untuk menampilkan detail buku
        public function displayBook() {
            echo "<div class='card mb-3'>";
            echo "<div class='card-body'>";
            echo "<h5 class='card-title'>{$this->title}</h5>";
            echo "<p class='card-text'>Author: {$this->author}</p>";
            echo "<p class='card-text'>Price: $" . number_format($this->price, 2) . "</p>";
            echo "</div></div>";
        }
    }

    // Contoh pewarisan: DigitalBook mewarisi Book
    class DigitalBook extends Book {
        public $fileSize; // Properti baru yang spesifik untuk DigitalBook

        // Konstruktor untuk DigitalBook
        public function __construct($title, $author, $price, $fileSize) {
            parent::__construct($title, $author, $price); // Memanggil konstruktor induk
            $this->fileSize = $fileSize;
        }

        // Mengoverride metode displayBook untuk menambahkan ukuran file
        public function displayBook() {
            parent::displayBook(); // Memanggil metode displayBook dari induk
            echo "<p class='card-text'>File Size: {$this->fileSize} MB</p>";
        }
    }

    // Membuat objek buku
    $book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99);
    $book2 = new DigitalBook("1984", "George Orwell", 12.99, 2.5); // Objek DigitalBook

    // Menampilkan buku
    $book1->displayBook();
    $book2->displayBook();

    // Memanggil fungsi untuk menampilkan buku dari array
    displayBooks($books);
    ?>

</div>

<footer class="bg-dark text-white text-center py-3 fixed-bottom">
        <small>
            &copy; 2025 booksales - All Right Reserved
            <br>
            A. Nasikh Zainal Fanani | Universitas Trunojoyo Madura
        </small>
    </footer>

<!-- Bootstrap JS dan dependensi -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
