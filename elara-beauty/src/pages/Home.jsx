import React from 'react';
import styles from '../assets/styles/global.module.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      {/* Carousel */}
      <div className="carousel w-full">
         {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
             {/* Gambar slide 1 */}
            <img src="/images/elara-room.jpeg" className="w-full h-[600px] object-cover" />
            {/* Tombol navigasi slide */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
            {/* Gambar slide 2 */}
            <img src="/images/elara-skincare.jpeg" className="w-full h-[600px] object-cover" />
            {/* Tombol navigasi slide */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
            {/* Gambar slide 3 */}
            <img src="/images/elara-treatment.jpeg" className="w-full h-[600px] object-cover" />
            {/* Tombol navigasi slide */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
            {/* Gambar slide 4 */}
            <img src="images/elara-waitingroom.jpeg" className="w-full h-[600px] object-cover" />
            {/* Tombol navigasi slide */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
      </div>
     {/* Content */}
      <div className="content-container">
          {/* Brand Ambassador */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-20">
                  {/* Gambar brand ambassador */}
                    <div className="flex justify-center items-center">
                        <img
                        src="/images/elara-ba.png"
                        className="h-80 w-auto md:h-80 rounded-full"
                        alt="Elara Brand Ambassador"
                        />
                    </div>
                 {/* Nama dan deskripsi brand ambassador */}
                <div className="flex flex-col justify-center">
                    <p className={`${styles.subtitleFont} text-xl font-semibold text-yellow-500 dark:text-white`}>
                        Brand Ambassador
                    </p>
                    <p className={`${styles.logoFont} mt-5 text-2xl text-yellow-400 dark:text-white`}>
                        Dasha Taran
                    </p>
                    <p className={`${styles.descFont} ms-2 mt-3 text-gray-500 dark:text-white`}>
                        Halo Para Dewi Elara! Aku Dasha, Ayo pakai rangkaian Produk dan Treatment dari Elara Beauty agar memiliki kulit seperti aku. Elara Beauty pastinya sudah diuji keamanannya yang pastinya sudah BPOM dan Halal !
                    </p>
                </div>
            </div>
        </div>
        {/* Fitur Unggulan */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-amber-50 p-10 md:pt-20 md:px-24">
            {/* Tiga Fitur klinik */}
            <div className="bg-gray-100 p-4 rounded-2xl my-5 flex justify-center items-center flex-col transition-transform duration-100 transform hover:scale-105 hover:shadow-md">
                <img
                    src="/icons/leaf-icon.png"
                    className="h-12"
                    alt="Leaf Icon"
                />
                <p className={`${styles.subtitleFont} text-2xl mt-4 text-orange-700 font-semibold dark:text-white`}>
                    Bahan Alami
                </p>
                <p className="text-center mt-10">
                    Bahan-bahan yang alami akan menghasilkan produk halal berkualitas tinggi dan menggenerasi kulit wajah secara alami.
                </p> 
            </div>
            <div className="bg-gray-100 p-4 rounded-2xl my-5 flex justify-center items-center flex-col transition-transform duration-100 transform hover:scale-105 hover:shadow-md">
                <img
                    src="/icons/lamp-icon.png"
                    className="h-12"
                    alt="Lamp Icon"
                />
                <p className={`${styles.subtitleFont} text-2xl mt-4 text-orange-700 font-semibold dark:text-white`}>
                    Inovasi
                </p>
                <p className="text-center mt-10">
                    Inovasi yang harus terus dibangun dengan standar internasional untuk menghasilkan produk berkualitas tinggi dan terjaga kualitasnya.
                </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-2xl my-5 flex justify-center items-center flex-col transition-transform duration-100 transform hover:scale-105 hover:shadow-md">
                <img
                    src="/icons/love-icon.png"
                    className="h-12"
                    alt="Love Icon"
                />
                <p className={`${styles.subtitleFont} text-2xl mt-4 text-orange-700 font-semibold dark:text-white`}>
                    Penuh Cinta
                </p>
                <p className="text-center mt-10">
                    Perawatan diri dapat menimbulkan rasa cinta dan merupakan salah satu kebahagiaan dalam hidup, maka rawatlah diri anda dengan baik.
                </p>
            </div>
        </div>
         {/* Produk Unggulan */}
        <div className="bg-amber-50 p-10 md:px-40 md:pb-20">
            <p className={`${styles.subtitleFont} text-center text-3xl mt-10 text-orange-800 font-bold mx-auto`}>
                Produk Unggulan Kami
            </p>
            {/* Tiga Produk Unggulan */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 my-5 bg-white flex justify-center items-center flex-col border-2 border-pink-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                    <img
                        src="/images/elara-beautycare.jpeg"
                        alt="Elara Beautycare"
                    />
                    <p className={`${styles.logoFont} text-xl mt-4 text-rose-400 dark:text-white text-center`}>
                        Skin Brightening Series
                    </p>
                    <p className="pt-3 text-center text-red-400">
                        Rangkaian perawatan kulit yang diformulasikan khusus untuk mencerahkan kulit kusam dan tidak merata.
                    </p>
                </div>
                <div className="p-6 bg-white my-5 flex justify-center items-center flex-col border-2 border-pink-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                    <img
                        src="/images/elara-bodycare.jpeg"
                        alt=" Elara Body care"
                    />
                    <p className={`${styles.logoFont} text-xl mt-4 text-rose-400 dark:text-white text-center`}>
                        Body Whitening Series
                    </p>
                    <p className="pt-3 text-center text-red-400">
                        Mengandung bahan-bahan alami seperti vitamin C, niacinamide, dan glutathione yang efektif untuk mencerahkan warna kulit.
                    </p>
                </div>
                <div className="p-6 bg-white  my-5 flex justify-center items-center flex-col border-2 border-pink-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                    <img
                        src="/images/elara-makeup.jpeg"
                        alt="Elaara Make Up"
                    />
                    <p className={`${styles.logoFont} text-xl mt-4 text-rose-400 dark:text-white text-center`}>
                        Luminous Bloom
                    </p>
                    <p className="pt-3 text-center text-red-400">
                        Bedak tabur memberikan efek glowing pada wajah dengan hasil yang halus dan natural, seperti memantulkan cahaya.
                    </p>
                </div>
            </div>
        </div>
         {/* Klinik */}
        <p className={`${styles.subtitleFont} text-center text-3xl mt-24 text-orange-800 font-bold dark:text-white`}>
          Klinik Kami
        </p>
        {/* Empat lokasi klinik */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-transparent p-10 md:px-32">
            <div className="pb-2 my-5 rounded-3xl flex justify-center items-center flex-col border-2 border-orange-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                <img
                    src="/images/elara-malang.jpeg"
                    className="rounded-t-3xl"
                    alt="Elara Malang"
                />
                <p className={`${styles.subtitleFont} text-xl mt-2 text-amber-600 font-semibold dark:text-white text-center`}>
                    Elara Beauty Malang
                </p>
                <p className="pt-3 p-2 text-center text-gray-400">
                    Malang Town Square, 2JV9+3FR, Jl. Veteran, Penanggungan, Kec. Klojen, Kota Malang, Jawa Timur 65113, Indonesia.
                </p>
            </div>
            <div className="pb-2 my-5 rounded-3xl flex justify-center items-center flex-col border-2 border-orange-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                <img
                    src="/images/elara-surabaya.jpeg"
                    className="rounded-t-3xl"
                    alt="Elara Surabaya"
                />
                <p className={`${styles.subtitleFont} text-xl mt-2 text-amber-600 font-semibold dark:text-white text-center`}>
                    Elara Beauty Surabaya
                </p>
                <p className="pt-3 p-2 text-center text-gray-400">
                    Pakuwon Mall Surabaya Lt. 1. Jl. Puncak Indah Lontar, Babatan, Kec. Wiyung, Surabaya, Jawa Timur, Indonesia.
                </p>
            </div>
            <div className="pb-2 my-5 rounded-3xl flex justify-center items-center flex-col border-2 border-orange-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                <img
                    src="/images/elara-bandung.jpeg"
                    className="rounded-t-3xl"
                    alt="Elara Bandung"
                />
                <p className={`${styles.subtitleFont} text-xl mt-2 text-amber-600 font-semibold dark:text-white text-center`}>
                    Elara Beauty Bandung
                </p>
                <p className="pt-3 p-2 text-center text-gray-400">
                Setrasari Mall, Jl. Terusan Sutami No.13 Blok B2, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40162, Indonesia.
                </p>
            </div>
            <div className="pb-2 my-5 rounded-3xl flex justify-center items-center flex-col border-2 border-orange-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
                <img
                    src="/images/elara-jakarta.jpeg"
                    className="rounded-t-3xl"
                    alt="Elara Jakarta"
                />
                <p className={`${styles.subtitleFont} text-xl mt-2 text-amber-600 font-semibold dark:text-white text-center`}>
                    Elara Beauty Jakarta
                </p>
                <p className="pt-3 p-2 text-center text-gray-400">
                    Plaza Senayan 2nd Floor no. 277c, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 12190, Indonesia.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Home;
