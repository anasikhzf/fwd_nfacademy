// Import function index, store, dan destroy dari controller.mjs menggunakan named import
import { index, store, destroy } from './controller.mjs';

// Tambahkan 2 data baru ke dalam array users menggunakan fungsi store()
store({ nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@mail.com' });
store({ nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@mail.com' });

// Membuat fungsi utama main() untuk menampilkan data
const main = () => {
  // Ambil seluruh data user dengan memanggil fungsi index()
  const data = index();

  // Tampilkan data ke console (bisa diubah ke tampilan di HTML/jQuery nantinya)
  console.log(data);
};

// Export default main supaya bisa dipanggil di file lain (sebagai module utama)
export default main;
