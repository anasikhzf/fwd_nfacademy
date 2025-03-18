//A. Nasikh Zainal Fanani | Universitas Trunojoyo Madura

// Array produk awal yang menyimpan daftar produk di toko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru ke dalam array produkToko
function tambahProduk(nama, harga, stok) {
    // Membuat id baru secara otomatis
    const idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
    // Menambahkan produk baru ke array
    produkToko.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk "${nama}" berhasil ditambahkan.\n`);
}

// Fungsi untuk menghapus produk dari array berdasarkan ID
function hapusProduk(id) {
    // Mencari index produk yang sesuai dengan id
    const index = produkToko.findIndex((produk) => produk.id === id);
    if (index !== -1) {
        console.log(`Produk "${produkToko[index].nama}" berhasil dihapus.\n`);
        produkToko.splice(index, 1); // Menghapus produk dari array
    } else {
        console.log("Produk dengan ID tersebut tidak ditemukan.\n");
    }
}

// Fungsi untuk menampilkan seluruh daftar produk di toko
function tampilkanProduk() {
    console.log("=== Daftar Produk Toko ===");
    produkToko.forEach((produk) => {
        console.log(`ID   : ${produk.id}`);
        console.log(`Nama : ${produk.nama}`);
        console.log(`Harga: Rp ${produk.harga}`);
        console.log(`Stok : ${produk.stok}\n`);
    });
}

// ========================= Contoh Penggunaan Fungsi ==========================

// Menampilkan daftar produk awal
tampilkanProduk();

// Menambah produk baru
tambahProduk("Headset", 400000, 8);

// Menampilkan daftar produk setelah penambahan
tampilkanProduk();

// Menghapus produk berdasarkan ID
hapusProduk(2);

// Menampilkan daftar produk setelah penghapusan
tampilkanProduk();
