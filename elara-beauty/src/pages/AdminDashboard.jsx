import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import { supabase } from '../supabase/client';
import { v4 as uuidv4 } from 'uuid';

const Articles = () => {
  // State untuk menyimpan status login
  const [isLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  // State untuk menyimpan data form artikel
  const [image,setImage] = useState("");
  const [title, setTitle] = useState("");
  const [highlight, setHighlight] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editArticle, setEditArticle] = useState(null);

   // Fungsi untuk menangani pengiriman data artikel
  async function handleSubmit(e) {
    e.preventDefault();
  // Insert data artikel ke database Supabase
    await supabase
    .from('articles')
    .insert({
      title: title,
      highlight:highlight,
      desc:desc,
      image:image,
    });

  // Reload halaman setelah pengiriman data berhasil
    location.reload()
  // Reset nilai form setelah pengiriman data
    setTitle("");
    setHighlight("");
    setDesc("");
    setImage("");
  }

  // Fungsi untuk mengunggah gambar ke Supabase Storage
  async function uploadImage(e) {
      // Mendapatkan file gambar dari event target
    let file = e.target.files[0];
      // Generate UUID untuk nama file gambar
    const id=uuidv4();
      // Upload file gambar ke Supabase Storage menggunakan UUID sebagai nama file
    const {data, error} = await supabase
      .storage
      .from('images')
      .upload(id, file) 
      console.log(data)
      // Menghandle respon dari proses upload
    if(data) {
        // Jika upload berhasil, dapatkan URL publik gambar yang diunggah
      let fileUrl = supabase.storage.from("images").getPublicUrl(id).data.publicUrl;
      // Set URL gambar ke state untuk ditampilkan atau digunakan dalam komponen
      setImage(fileUrl)
      console.log(fileUrl)
    } else {
        // Jika terjadi kesalahan saat upload, tampilkan pesan error
      console.log(error);
    }
  }

  // Fungsi untuk mengambil data artikel dari database
  async function fetchData() {
      // Menggunakan Supabase client untuk mengambil data dari tabel 'articles'
      const resp = await supabase
      .from('articles')
      .select('*')
      .then(({ data }) => {
          // Mengembalikan data artikel atau array kosong jika tidak ada data
          return data || [];
        });
      // Menyimpan data artikel yang diambil ke dalam state 'data'
      setData(resp);
  }
    // Mengambil data saat komponen dimuat menggunakan useEffect
    useEffect(() => {
    // Memanggil fungsi fetchData saat komponen pertama kali dimuat
      fetchData();
      
    }, [])

  // Fungsi untuk menghapus artikel dari database berdasarkan ID
  async function handleDelete(id) {
        // Menggunakan Supabase client untuk menghapus data artikel dari tabel 'articles' berdasarkan ID
      const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)
        // Menghandle kesalahan jika terjadi saat menghapus data
      if (error) {
        console.error(error);
      } else {
        console.log('Deleted');
      }
          // Memuat ulang halaman setelah menghapus data
      location.reload()
      }
      

    // Fungsi untuk meng-handle pengeditan artikel  
    async function handleEdit(id) {
      // Mengambil data artikel dari Supabase berdasarkan ID
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single();
      // Menghandle kesalahan jika terjadi saat mengambil data artikel
      if (error) {
        console.error('Error fetching article:', error.message);
      } else {
          // Jika tidak ada kesalahan, set data artikel yang akan di-edit ke state
        setEditArticle(data);
        // Mengubah mode menjadi mode edit
        setEditMode(true);
      }
    }


    // Fungsi untuk menangani pengiriman perubahan pada artikel yang sedang diedit
    async function handleSubmitEdit(e) {
      e.preventDefault();
      
    // Mengirim permintaan pembaruan ke database Supabase
      await supabase
        .from('articles')
        .update({
          title: title,
          highlight: highlight,
          desc: desc,
          image: image,
        })
        .eq('id', editArticle.id); // Memastikan hanya artikel dengan ID yang sesuai yang diperbarui
  
        // Mengatur kembali state dan membersihkan nilai input setelah pengiriman berhasil 
        setEditMode(false);
        setEditArticle(null);
        setTitle("");
        setHighlight("");
        setDesc("");
        setImage("");
        fetchData(); 
        location.reload()
    }


    // Fungsi untuk menangani perubahan pada input file gambar
    const handleImageChange = (e) => {
      // Mengambil file gambar dari input
      const file = e.target.files[0];
      // Membuat objek FileReader untuk membaca file gambar
      const reader = new FileReader();
      // Mengatur fungsi yang akan dipanggil saat pembacaan file selesai
      reader.onloadend = () => {
          // Mengatur nilai gambar dalam bentuk data URL ke state
        setImage(reader.result);
      };

      // Memeriksa apakah file yang dipilih adalah gambar yang valid
      if (file) {
          // Memeriksa ekstensi file untuk memastikan bahwa itu adalah gambar
          if (file) {
            if (!file.name.match(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)) {
              // Jika ekstensi file tidak valid, mengatur pesan kesalahan
              // setErrors(prevErrors => ({
              //   ...prevErrors,
              //   image: 'Invalid image file format! Please select a valid image file.'
              // }));
              return; // Menghentikan eksekusi lebih lanjut
            }
              // Jika ekstensi file valid, membaca file sebagai data URL
            reader.readAsDataURL(file);
          }
        }
  
      }
  return (
    <div>
      {/* Menampilkan komponen HeaderAdmin jika pengguna telah login */}
        <div>
          {isLoggedIn && <HeaderAdmin/>}
        </div>
    <div className="bg-gray-50 mx-auto py-44 px-20 ">
       <div className="max-w-lg mx-auto mb-14 relative ">
        <input
          type="text"
          className="w-full px-4 py-2 pr-16 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500"
          placeholder="Cari artikel"
        />
        <button type="submit" className="absolute inset-y-0 right-0 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.785-4.785M4 10a6 6 0 016-6h0a6 6 0 016 6v0a6 6 0 01-6 6h0a6 6 0 01-6-6z"></path>
          </svg>
        </button>    
      </div>
        <div className="flex justify-center items-center relative">
        {/* Menampilkan formulir untuk mengedit artikel jika sedang dalam mode pengeditan dan data artikel tersedia */}
          <div className="w-1/2">
            {editMode && editArticle && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-orange-800 font-bold mb-4 ms-4 text-2xl pt-6">Artikel Utama</h1>
                <form onSubmit={handleSubmitEdit} className="mt-8">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="mb-4 px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 w-full"
                    placeholder="Judul Artikel"
                    required
                    value={title || editArticle.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="file"
                    name="image"
                    id="image" 
                    accept="image/png, image/jpeg"
                    required
                    className="file-input mb-4 file-input-bordered file-input-warning w-full"
                    onChange={handleImageChange}
                  />

                  <input
                    type="text"
                    name="highlight"
                    id="highlight"
                    className="mb-4 px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 w-full"
                    placeholder="Sorotan"
                    required
                    value={highlight || editArticle.highlight}
                    onChange={(e) => setHighlight(e.target.value)}
                  />
                  <textarea
                    type="text"
                    name="desc"
                    id="desc"
                    className="mb-4 px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 w-full"
                    placeholder="Deskripsi"
                    required
                    value={desc || editArticle.desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <button type="submit" className="px-6 py-2 bg-amber-500 text-white font-bold rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600 w-full">
                    Simpan Perubahan
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      <button className=" absolute text-sky-500 font-extrabold text-5xl top-1/4 right-24 pt-10  bg-transparent" onClick={()=>document.getElementById('my_modal_3').showModal()}>+</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
            <h3 className="font-bold text-lg text-center mb-6 text-orange-800">Buat Artikel Baru</h3>
            <input type="text" name="title" id="title" className="mb-4 px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 w-full" placeholder="Judul Artikel" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="file" name="image" id="image" accept="image/png, image/jpeg" className="file-input mb-4 file-input-bordered file-input-warning w-full max-w-xs" required onChange={(e) => uploadImage(e)}/>
            <input type="text" name="highlight" id="highlight" className="mb-4 px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 w-full" placeholder="Sorotan" required value={highlight} onChange={(e) => setHighlight(e.target.value)}/>
            <textarea name="description" id="description" className="mb-4 px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 w-full h-32 resize-none" placeholder="Deskripsi Artikel" required value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
            <div className="flex items-end justify-end"></div>
            <button className="px-6 py-2 bg-amber-500 text-white font-bold rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600 w-full" onClick={handleSubmit}>Buat Artikel</button>
        </div>
      </dialog>
      <h1 className="text-orange-800 font-bold mb-4 ms-4 text-2xl pt-6">Artikel Utama</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
          <div className="dropdown dropdown-left absolute right-3 top-1">
                <div tabIndex={0} role="button" className=" py-1 px-2 bg-transparent text-gray-700 bg-amber-50 text-2xl m-">•••</div>
                <ul tabIndex={0} className="dropdown-content z-[1] rounded-lg menu p-0 shadow bg-base-100 w-32">
                    <li><a className="font-semibold text-md rounded-t-lg hover:bg-red-400 hover:text-white rounded-none">Hapus</a></li>
                    <li><a className="font-semibold text-md rounded-b-lg hover:bg-green-400 hover:text-white rounded-none">Edit</a></li>
                </ul>
            </div>
            <img
              src="/images/article-glowing.jpeg"
              className="w-full h-[400px] object-cover"
              alt="Artikel Glowing Skin"
            />
            <div className="p-6">
              <h2 className="text-2xl text-orange-600 font-bold mb-2">Kulit Glowing Natural dengan Kandungan Skincare yang Tepat</h2>
              <p className="text-gray-700 ms-2">Kulit glowing natural sedang tren dan menjadi dambaan banyak orang.  Ini berbeda dengan kulit yang terlihat mengkilap karena minyak berlebih.  Kulit glowing natural memiliki tekstur yang halus, sehat, dan tampak bercahaya secara alami.</p>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto max-h-[560px]">
        <h1 className="text-orange-800 font-bold mb-4 ms-4 text-lg">Artikel Lainnya</h1>
          {data.map(articles => (
            <div key={articles.id} className="bg-white shadow-lg rounded-lg overflow-hidden mt-8 relative">
              <div className="dropdown dropdown-left absolute right-3 top-1">
                <div tabIndex={0} role="button" className=" py-1 px-2 bg-transparent text-gray-700 bg-amber-50 text-2xl">•••</div>
                <ul tabIndex={0} className="dropdown-content z-[1] rounded-lg menu p-0 shadow bg-base-100 w-32">
                  <li><a className="font-semibold text-md rounded-t-lg hover:bg-red-400 hover:text-white rounded-none" onClick={() => handleDelete(articles.id)}>Hapus</a></li>
                  <li><a className="font-semibold text-md rounded-b-lg hover:bg-green-400 hover:text-white rounded-none" onClick={() => handleEdit(articles.id)}>Edit</a></li>
                </ul>
              </div>
              <img
                    key={articles.id}
                    src={articles.image}
                    type="image/png, image/jpeg"
                  />
              <div className="p-6">
                <h2 className="text-xl text-orange-600 font-bold mb-2">{articles.title}</h2>
                <p className="text-gray-700">{articles.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Articles;
