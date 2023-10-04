import React from 'react';

// Di nomor 22 aku menjelaskan kalo kalian harus import css yang kalian bikin.
// Di dalam folder ini kalian bisa lihat ada index.css yang aku buat sebagai contoh
// Nanti kalian import tuh cssnya, kek gini :
import './index.css';
// Buat memastikan kalian sudah terhubung ke css yang benar, kalian ctrl + klik aja, kalo masuk ke file yang sesuai berarti sudah benar, kalo ngaco / notfound berarti ada yang salah.

// Di nomor 16 Ini masih dikasih nama Component, lalu di nomor 17 diganti namanya sesuai nama Foldernya
// Penamaan ini berfungsi sebagai penamaan component, yang nanti kalian pake ketika mengimport component ini
export default function Home() {
  return (
    <>
      {/* Di nomor 16 isi divnya Testing, di nomor 18 ganti jadi sesuai nama Folder */}
      <div className='home'>Home</div>
    </>
  );
}
