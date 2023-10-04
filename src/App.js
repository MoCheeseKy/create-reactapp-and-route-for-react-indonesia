// Hapus import logo from './logo.svg';
// Hapus import './App.css';

// Setelah nomor 12 :
// Tambahin :
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Setelah nomor 19 :
// Tambahin :
import Home from './Pages/Home';
import About from './Pages/About';
// Import disini harus sesuai dengan penamaan componet yang kalian berikan. Coba ctrl + klik untuk memastikan import menuju component yang benar.
// Ini nanti yang bakal dimasukan kedalam element pada route

function App() {
  return (
    // Awalnya disini ada <div className='App'> ...., itu dihapus semua
    // Ganti <> <div>Testing</div> </>

    // Kalo dah nomor 12,  Hapus <> <div>Testing</div> </>, dan ganti sesuai arahan
    <Suspense>
      <Routes>
        {/* Setelah nomor 19, tambahin 1 route lagi : */}
        {/* Sebelum nomor 19 nanti isi elementnya masih <div>Testing</div>, nah kalo dah nomor 19 diganti jadi Component sesuai arahan */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Suspense>
  );
}

export default App;
