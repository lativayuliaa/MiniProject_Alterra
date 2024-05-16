import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/client';


const Articles = () => {
  // State untuk menyimpan data artikel
  const [data, setData] = useState([]);

  // Fungsi untuk mengambil data artikel dari database
  async function fetchData() {
    // Menggunakan supabase client untuk mengambil data dari tabel 'articles'
      const resp = await supabase
      .from('articles')
      .select('*')
      .then(({ data }) => {
         // Mengembalikan data artikel jika ada, jika tidak, mengembalikan array kosong
          return data || [];
        });
      // Mengatur state data dengan data artikel yang didapat dari database
      setData(resp);
  }
  // Mengambil data saat komponen dimuat menggunakan useEffect
    useEffect(() => {
      // Memanggil fungsi fetchData untuk mengambil data
      fetchData();
    }, [])

  return (
    <div className="bg-gray-50 mx-auto py-44 px-20">
      {/* Form pencarian artikel */}
       <div className="max-w-lg mx-auto mb-14 relative">
        <input
          type="text"
          className="w-full px-4 py-2 pr-10 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500"
          placeholder="Cari artikel"
        />
        <button type="submit" className="absolute inset-y-0 right-0 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.785-4.785M4 10a6 6 0 016-6h0a6 6 0 016 6v0a6 6 0 01-6 6h0a6 6 0 01-6-6z"></path>
          </svg>
        </button>
      </div>
      {/* Artikel utama Default */}
      <h1 className="text-orange-800 font-bold mb-4 ms-4 text-2xl">Artikel Utama</h1>
       {/* Konten artikel utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
              <img
                src="/images/article-glowing.jpeg"
                className="w-full h-[400px] object-cover"
                alt="Artikel Glowing Skin"
              />
              <div className="p-6">
                <h2 className="text-2xl text-orange-600 font-bold mb-2">Kulit Glowing Natural dengan Kandungan Skincare yang Tepat</h2>
                <p className="text-gray-700 ms-2">Kulit glowing natural sedang tren dan menjadi dambaan banyak orang.  Ini berbeda dengan kulit yang terlihat mengkilap karena minyak berlebih.  Kulit glowing natural memiliki tekstur yang halus, sehat, dan tampak bercahaya secara alami.</p>
                <div className="flex items-end justify-end">
                  <a href="#" className="text-yellow-600 hover:text-yellow-700 italic mt-3">»Baca Selengkapnya</a>
                </div>
            </div>
          </div>
        </div>
         {/* Daftar artikel lainnya */}
          <div className="overflow-y-auto max-h-[590px]">
            <h1 className="text-orange-800 font-bold mb-4 ms-4 text-lg">Artikel Lainnya</h1>
              {data.map(articles => (
                <div key={articles.id} className="bg-white shadow-lg rounded-lg overflow-hidden mt-8 relative">
                  <div className="dropdown dropdown-left absolute right-3 top-1">
                  </div>
                  <img
                        key={articles.id}
                        src={articles.image}
                        type="image/png, image/jpeg"
                      />
                  <div className="p-6">
                    <h2 className="text-xl text-orange-600 font-bold mb-2">{articles.title}</h2>
                    <p className="text-gray-700">{articles.highlight}</p>
                    <div className="flex items-end justify-end">
                    <Link to={`/detailarticle/${articles.id}`} className="text-yellow-600 hover:text-yellow-700 italic mt-3">»Baca Selengkapnya</Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Articles;