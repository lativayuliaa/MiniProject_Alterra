import React from 'react';
import styles from '../assets/styles/global.module.css';

const Footer = () => {
  return (
    <footer className="bg-orange-50 pt-10 border-t border-amber-200">
      {/* Bagian atas footer */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 text-gray-800">
        <div className="flex flex-col md:flex-row">
          {/* Bagian kiri footer */}
          <div className="md:w-3/4">
            {/* Logo dan deskripsi Elara Beauty */}
            <img
              src="/images/elara-logo.png"
              className="mb-5 h-32"
              alt="Elara Beauty Logo"
            />
            <span className={`${styles.logoFont} text-2xl text-orange-300 whitespace-nowrap dark:text-white`}>
              Elara Beauty
            </span>
            <div className="mt-2 m-4">
              <p className={`${styles.descFont} text-gray-500`}>
                Hi Dewi Elara, Ini Merupakan Website Official Elara Beauty. Dapatkan Informasi Terbaru Mengenai Elara Beauty Disini.
              </p>
            </div>
          </div>
          {/* Bagian tengah dan kanan footer */}
          <div className="md:w-1/3 md:flex md:flex-col">
            {/* Informasi operasional */}
            <div className="text-lg font-bold text-orange-700">
              <h4>OPERASIONAL</h4>
            </div>
            {/* Update jam operasional */}
            <p className="m-2 font-medium text-gray-500"> Jam Buka : 09.00 </p>
            <p className="m-2 font-medium text-gray-500"> Jam Tutup : 21.00 </p>
          </div>
          <div className="md:w-1/3 md:flex md:flex-col">
            {/* Informasi kontak */}
            <div className="text-lg font-bold text-orange-700">
              <h4>INFORMASI</h4>
            </div>
            {/* Update informasi kontak */}
            <div className="flex flex-col">
              <div className="flex items-center m-2">
                <img
                  src="/icons/phone-icon .png"
                  className="h-5 mr-2"
                  alt="Phone icon"
                />
                <p className="font-medium text-gray-500">021-2234-7896</p>
              </div>
              <div className="flex items-center m-2">
                <img
                  src="/icons/email-icon.png"
                  className="h-5 mr-2"
                  alt="Email icon"
                />
                <p className="font-medium text-gray-500">elarabeautycl1nic@gmail.com</p>
              </div>
              <div className="flex items-center m-2">
                <img
                  src="/icons/location-icon.png"
                  className="h-5 mr-2"
                  alt="Location icon"
                />
                <p className="font-medium text-gray-500">Senopati Square, lantai 2, Unit 21A, Jl. Senopati No. 64, Jakarta Selatan 12190, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bagian bawah footer */}
      <div className="bg-amber-100 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-orange-200 text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            {/* Link sosial media */}
            <a
              href="https://www.instagram.com/lativayuliaa"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
                viewBox="0 0 30 30"
                fill="currentColor"
                className="h-6 hover:text-orange-700 cursor-pointer"
              >
                <circle cx={15} cy={15} r={4} />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://youtu.be/JTfUXvTPFSc"
              target="_blank"
              className="w-6 mx-1"
            >
              <svg
                className="fill-current cursor-pointer text-gray-500 hover:text-orange-700"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_1">
                  <circle id="Oval" cx={12} cy={12} r={12} />
                  <path
                    id="Shape"
                    d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938 -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125 0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813 -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068 -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204 -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068 0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204 0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  />
                </g>
              </svg>
            </a>
          </div>
          {/* Hak cipta */}
          <div className="my-5">© Hak Cipta 2024. Elara Beauty | Elara Skin Care adalah merek dagang dari PT Elara Beauty Estetika.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
