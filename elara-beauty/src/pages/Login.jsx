import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate(); // Mendapatkan fungsi navigate dari useNavigate hook
  const [email, setEmail] = useState(''); // State untuk menyimpan email
  const [password, setPassword] = useState('');  // State untuk menyimpan password
  const [errorMessage, setErrorMessage] = useState('');// State untuk menyimpan pesan kesalahan

  // Fungsi untuk menangani login
  const handleLogin = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari event submit
   
    // Validasi email dan password
    if (email === 'admin@elarabeauty.com' && password === 'elarabeauty') {
      // Jika login berhasil, panggil prop onLogin untuk mengatur status login di komponen induk
      onLogin();
      // Navigasikan ke halaman beranda admin
      navigate('/admin-dashboard');
    } else {
      // Jika login gagal, atur pesan kesalahan
      setErrorMessage('Email atau kata sandi salah');
    }
  };

  return (
    <div className="bg-gray-50 pt-20">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg border border-orange-300 shadow dark:border md:mt-0 shadow-md sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl text-orange-800 font-bold leading-tight tracking-tight text-orange-900 md:text-2xl">
                      Masuk ke Akun Anda
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-orange-900 ">E-mail</label>
                          <input type="email" name="email" id="email" className="border border-orange-300 text-orange-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="nama@elarabeauty.com" required value={email} onChange={(e) => setEmail(e.target.value)}  />
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-orange-900">Kata Sandi</label>
                          <input type="password" name="password" id="password" className="border border-orange-300 text-orange-900 sm:text-sm rounded-lg focus:ring-2 block w-full p-2.5" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div>
                          {errorMessage && <p className="text-red-500 text-xs text-center">{errorMessage}</p>}
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border  border-orange-300 rounded bg-amber-50 focus:ring-3 focus:ring-orange-300" />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-orange-500">Ingat saya</label>
                              </div>
                          </div>
                          <a href="#" className="text-sm font-medium text-orange-600 hover:underline">Lupa Kata Sandi?</a>
                      </div>
                      <button type="submit" className="w-full bg-amber-500 text-white hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Masuk Akun</button>
                      <p className="text-sm font-light text-orange-500">
                          Belum mempunyai akun? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-otrange-500">Daftar Akun</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
