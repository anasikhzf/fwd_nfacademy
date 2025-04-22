// Import data users dari file data.mjs (default export)
import users from "./data.mjs";

// Fungsi untuk menampilkan seluruh data users
const index = () => users;

// Fungsi untuk menambahkan data user baru ke dalam array users
const store = (user) => {
  users.push(user); // push = tambah data ke array
};

// Fungsi untuk menghapus data terakhir dari array users
const destroy = () => {
  users.pop(); // pop = hapus data paling akhir di array
};

// Fungsi tambahan untuk menghapus data user berdasarkan index yang dipilih
const deleteByIndex = (idx) => {
  users.splice(idx, 1); // splice = hapus data mulai dari index tertentu sebanyak 1 data
};

// Export semua fungsi dengan named export
export { index, store, destroy, deleteByIndex };
