import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../assets/styles/global.module.css';

const Header = () => {
    // Menggunakan useLocation untuk mendapatkan lokasi saat ini
    const location = useLocation();

    return (
        <div className="navbar bg-base-100 z-10 fixed shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* Tombol dropdown untuk versi mobile */}
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {/* Menu dropdown untuk versi mobile */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className={`${location.pathname === '/' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Beranda</Link></li>
                        <li>
                            <a className="block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700">Perawatan</a>
                            {/* Submenu untuk layanan perawatan */}
                            <ul className="p-2">
                                <li><Link to="/list-treatment" className={`${location.pathname === '/list-treatment' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Daftar Layanan</Link></li>
                                <li><Link to="/recommendation-treatment" className={`${location.pathname === '/recommendation-treatment' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Rekomendasi Kami</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/article" className={`${location.pathname === '/article' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Artikel</Link></li>
                    </ul>
                </div>
                {/* Logo */}
                <img
                    src="/images/elara-logo.png"
                    className="m-2 h-12"
                    alt="Elara Beauty Logo"
                />
                <span className={`${styles.logoFont} text-2xl text-orange-300 whitespace-nowrap`}>
                    Elara Beauty
                </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Menu horizontal untuk versi desktop */}
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className={`${location.pathname === '/' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Beranda</Link></li>
                    <li>
                        <details>
                            <summary className=" px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700" >Perawatan</summary>
                            {/* Submenu untuk layanan perawatan */}
                            <ul className="p-2 w-52">
                                <li><Link to="/list-treatment" className={`${location.pathname === '/list-treatment' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Daftar Layanan</Link></li>
                                <li><Link to="/recommendation-treatment" className={`${location.pathname === '/recommendation-treatment' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Rekomendasi Kami</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/article" className={`${location.pathname === '/article' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Artikel</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* Dropdown untuk profil pengguna */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                        <button>
                            <img
                                src="/icons/profile-icon.png"
                                className="h-10"
                                alt="Profile"
                            />
                        </button>
                    </div>
                    {/* Menu dropdown untuk profil pengguna */}
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/login" className={`${location.pathname === '/login' ? 'block px-4 py-2 text-orange-800 font-bold hover:bg-orange-100 focus:bg-transparent focus:text-orange-800 ' : 'block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700'}`}>Masuk Akun</Link>
                        </li>
                        <li>
                            <a className="block px-4 py-2 hover:bg-orange-100 text-sm font-semibold text-gray-700">Daftar Akun</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
