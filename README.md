Disini aku akan menjelaskan cara membuat react-app
Target : - Bisa membuat React App - Bisa menggunakan routing di React - Bisa membuat page components

1. Membuat React App
   Ketik di cmd : npx create-react-app nama-project
   Ini disebut metode CRA, nama project pake huruf kecil tanpa spasi, spasi diganti -

2. Menghapus file tidak terpakai di folder src sebagai berikut :
   - App.test.js
   - reportWebVitals.js
   - setupTests.js
   - logo.svg
3. Buka index.js
   - Hapus import reportWebVitals ....
   - Hapus command dan reportWebVitals()
   - save
4. Hapus file App.css
5. Buka App.js

   - Hapus import App.css
   - Hapus import Logo
   - Hapus isi Return, ganti <> <div>Testing</div> </>
   - save

6. Coba buka terminal. Ketik : npm start
   npm start digunakan untuk merunning program. ketik ctrl + c untuk menghentikan.
   harusnya kebuka di localhost:3000 (kecuali post ini lagi dipake), harusnya muncul text testing

7. Hentikan dulu program.

8. Ketik : npm i react-router-dom
   Kita tambahin dependencies react-router-dom untuk bisa menggunakan routing

9. Cek package.json, kalo sukses di dependencies harusnya ada react-router-dom (berlaku kalo kalian install dependencies lain juga)

10. Buka index.js
    - import { BrowserRouter } from 'react-router-dom';
    - bunngkus &lt;App/&gt; dengan &lt;BrowserRouter&gt;&lt;/BrowserRouter&gt;
11. npm start kembali, dan cek, harusnya sama seperti sebelumnya
12. Buka App.js
    - import React, { Suspense } from 'react'
    - import { Route, Routes } from 'react-router-dom';
    - Hapus
    <pre>
    <code>
    &lt;&gt; 
        &lt;div&gt;Testing&lt;/div&gt; 
    &lt;/&gt;
    </code>
    </pre>
    - Ganti :
      <pre>
      <code>
      &lt;Suspense&gt;
        &lt;Routes&gt;
            &lt;Route path='/' element={&lt;div&gt;Testing&lt;/div&gt;} /&gt;
        &lt;/Routes&gt;
      &lt;/Suspense&gt;</code>
      </pre>
      Kita bakal mainan di path sama element aja untuk saat ini
      1 halaman diwakili oleh 1 <Route></Route>
      path adalah arah route kita. element adalah html yang kita return.
13. Buat folder Pages didalam folder src
14. Buat folder Home dan About didalam folder Pages
15. Buat file index.jsx di folder Home dan About (masing masing 1)

16. Masukan ke masing-masing filenya :
    import React from "react";
    export default function Component(){
    return(
    <>
    <div>Testing</div>
    </>
    )
    }
17. Ganti kata Component jadi sesuai dengan nama folder. Misal Home, ganti jadi Home
18. Ubah isi divnya sesuai nama Folder. Misal Home, ganti jadi Home
19. Buka App.js :
    - Import Pages : (Home, About)
    - Buat Route baru, dengan path /about
    - Masukan component Home ke path /
    - Masukan component About ke path /about
      Cara menulis sebuah component itu sama seperti menulis tag HTML, namun diganti dengan nama componentnya
      Misal component Home, nanti saat dipanggil ditulis <Home></Home>, atau bisa juga <Home/> jika kalian tidak mau menambahkan hal lain didalam Home.
20. Coba npm start kembali
21. Buka http://localhost:3000 dan http://localhost:3000/about, harusnya muncul tulisan sesuai yang kalian tulis didalam componentnya
    note : ini kalo di runnya di localhost 3000, kalo misal localhost 3001 ya sesuaikan saja
22. Kalo sudah aman, kalian sekarang sudah bisa menggunakan routing untuk React JS
    Semua yang ada didalam folder pages disebut component
    Component yang ada didalam folder pages mendefinisikan bahwa mereka adalah sebuah halaman yang akan kalian tampilkan di website, sesuai dengan path route yang sudah kalian berikan didalam App.js
    Oh iya, path yang cuman / itu bisa kalian sebut path default / path yang kalian munculin pertama kali program dijalankan, atau biasa disebut landing page sebuah halaman, misal http://localhost:3000
    Sekarang kalian tinggal isi componentnya dengan tag tag HTML yang kalian inginkan
    Kalo mau nambahin css ya tinggal buat file css aja, sejajarkan dengan index.jsx, lalu nanti kalian import cssnya
    Untuk memberi class pada html diganti jadi className
    Aku udah kasih contohnya di component Home, kira kira nanti kaya gitu.
