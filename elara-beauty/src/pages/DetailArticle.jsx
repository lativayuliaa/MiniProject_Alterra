import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../supabase/client';

const DetailArticlePage = () => {
  const { id } = useParams(); // Mendapatkan id artikel dari URL
  const [article, setArticle] = useState(null); // State untuk menyimpan data artikel

  useEffect(() => {
    // Mengambil data artikel dari Supabase berdasarkan id dimuat
    async function fetchArticle() {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single(); // Mengambil hanya satu artikel dengan id yang cocok
      if (error) {
        console.error('Error fetching article:', error.message);
      } else {
        setArticle(data); // Menyimpan data artikel ke dalam state
      }
    }

    fetchArticle(); // Memanggil fungsi fetchArticle saat komponen dimuat
  }, [id]); // Bergantung pada perubahan id untuk mengambil artikel yang sesuai

  // Jika artikel sedang dimuat, tampilkan pesan loading
  if (!article) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className="bg-gray-50 mx-auto py-8 pt-44">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4 text-orange-800">{article.title}</h1>
        <div className="mb-4">
          <img src={article.image} alt={article.title} className="w-full rounded-lg" />
        </div>
        <p className="text-gray-700 mb-4">{article.desc}</p>
        <Link to="/article" className="text-yellow-600 hover:text-yellow-700 italic mt-3">Kembali..</Link>
      </div>
    </div>
  );
};

export default DetailArticlePage;
