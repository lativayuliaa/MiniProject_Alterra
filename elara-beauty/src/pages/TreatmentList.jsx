import React from 'react';
import styles from '../assets/styles/global.module.css';

const TreatmentList = () => {
  return (
    <div className="mx-auto pt-44 py-8 bg-gray-50">
        {/* Daftar Layanan */}
          <h2 className="text-center  text-orange-800 font-bold text-4xl mb-4">Daftar Layanan</h2>
            {/* Acne Treatment */}
              <div className="mb-8">
                <p className={`${styles.logoFont} mt-5 text-2xl text-orange-700 ps-16 pb-4`}>
                    Acne Treatment
                </p>
                  {/* Individual treatment items */}
                    <div className="flex space-x-4 overflow-x-auto max-w-[1300px] mx-auto">
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Glow Acne Peel</h4>
                        <img src="images/treatment-peeling.jpeg" alt="Acne Peel" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Mengangkat sel kulit mati, mengeringkan jerawat, melunakkan komedo, memudarkan bekas jerawat dan membuat kulit lebih berkilau.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 200.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Acne Cure</h4>
                        <img src="images/treatment-acnecure.jpeg" alt="Acne Cure" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Terapi Laser Diode 1450nm. yangg sangat efektif untuk mengurangi ukuran kelenjar minyak, sehingga mencegah tumbuhnya jerawat.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 459.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">IPL Acne Active/Redness</h4>
                        <img src="images/treatment-iplacne.jpeg" alt="Acne Active" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Perawatan kulit dengann IPL (Intense Pulsed Light) panjang gelombang 430-1200nm yang efektif membunuh P.Acnes sehiingga mengeringkan jerawat yang sudah ada dan mampu mengatasi bekas jerawat kemerahan (redness).</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 295.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Meso Cell Acne</h4>
                        <img src="images/treatment-meso.jpeg" alt="Meso Acne" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Teknik mesotherapy yang bertujuan untuk mengeringkan jerawat, mengurangi minyak dan peradangan.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 250.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Korean Clear Acne Advance</h4>
                        <img src="images/treatment-koreanpremium.jpeg" alt="Korean Clear Acne" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Perpaduan teknologi Laer Diode 1450nm dengan Korean Black Rice Peel serta serum acne untuk mengurangi ukuran kelenjar minyak sehinnga mencegah timbulnya jerawat baru.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 705.00.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Korean Clear Acne Premium</h4>
                        <img src="images/treatment-korean.jpeg" alt="Korean Clear Acne Premium" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Perpaduan perawaatn Intense Pulsed Light dengan Korean Black Rice Peel serta serum acne untuk mengeringkan jerawat serta mengahluskan kulit.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 650.000,-</p>
                      </div>
                  </div>
              </div>
            {/* Brightening Treatment */}
              <div className="mb-8">
                  {/* Individual treatment items */}
                    <p className={`${styles.logoFont} mt-5 text-2xl text-orange-700 ps-16 pb-4`}>
                        Brightening Treatment
                    </p>
                    <div className="flex space-x-4 overflow-x-auto max-w-[1300px] mx-auto">
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Glow Bright Peel</h4>
                        <img src="images/treatment-brightpeel.jpeg" alt="Bright Peel" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Membantu mengangkat sel kulit mati, menverahkan, dan meratakan warna kulit, membuat kulit lebih berkilau.</p>
                        <p className="text-amber-800 font-semibold mt-2 text end">Harga: Rp. 146.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Meco Cell Snow White</h4>
                        <img src="images/treatment-snowwhite.jpeg" alt="Meso cell snow white" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Teknik mesotherapy yang dapat mencerahkan dan melembabkan kulit dengan ekstrak phyllantus emblica dan asam amino</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 275.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">IPL Shower Bright</h4>
                        <img src="images/treatment-iplshower.jpeg" alt="IPL Shower" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Teknik pencerahan dan peremajaan kulit menggunakan teknologi IPL (Intense Pulsed Light) dengan panjang gelompang 725-1200 nm yang dapat mencegah kulit kendur, dan mengurangi kerutan halus.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 315.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Enzymatic Pumkin Peel</h4>
                        <img src="images/treatment-pumkin.jpeg" alt="Pumkin Peel" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Meremajakan kulit dengan fermentasi buah labu kunin yang kaya anti oksidan (B-carotene, omega 3, omega 6, & flavonoid)</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 159.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Crystal Clear Laser</h4>
                        <img src="images/treatment-crystal.jpeg" alt="Crystal clear" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Perpaduan teknologi Laer Diode 1450nm dikombinasikan dengan IPL (Intense Pulsed Light) dan Meso Therapi Translucent White Serum, efektif untuk mencerahkan wajah seketika, menghambat pembentukan jerawat sehingga kulit wajah tidak terlalu berminyak, glowing dan cerah sebening crystal.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 1.250.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Bright Booster Laser</h4>
                        <img src="images/treatment-boosterlaser.jpeg" alt="Booster Laser" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Perpaduan perawatan menggunakan Laser Diode 1450nm yang dipadukan dengan teknik mesotherapy translucent white serum, bermanfaat untuk menutrisi kulit, dan merangsang pembentukan kolagen sehingga wajah tampak cerah, kenyal, dan glowing seketika.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 860.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">TDL Brightening C Treatment</h4>
                        <img src="images/treatment-vitc.jpeg" alt="Vit C treatment" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Teknik mesotherapy yang dapat mencerahkan kulit, memudarkan flek hitam dan bekas jerawat hitam dan merah (PIE & PIH) dengan vit C.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 250.000,-</p>
                      </div>
                  </div>
              </div>
          {/* Scar and Pore Treatment */}
              <div className="mb-8">
                  {/* Individual treatment items */}
                    <p className={`${styles.logoFont} mt-5 text-2xl text-orange-700 ps-16 pb-4`}>
                        Scar and Pore Treatment
                    </p>
                    <div className="flex space-x-4 overflow-x-auto max-w-[1300px] mx-auto">
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Platelet Rich Plasma Treatment</h4>
                        <img src="images/treatment-plateletrich.jpeg" alt="Platelet Rich" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Perawatan wajah derigan Plasma Darah yang kaya akan Trombosit atau PRP (Platelet Rich Plasma) dimana trombosit merupakari sumber alami faktor pertumbuhan (Growth Factor) yang memiliki kemampuan unik untuk merangsang produksi kolagen dan elastin yang berfungsi untuk meregenerasi pembentukan sel kulit baru dan meremajakan kulit pada kasus scar bekas jerawat atau pun bekas cacar air, kerutan dan pigmentasi sehingga kulit tampak lebih muda, halus dan kencang.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 576.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Fibroblast Simulator</h4>
                        <img src="images/treatment-fibroblast.jpeg" alt="Fibroblast Simulator" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Teknik mesotherapy dengan 5 growth factor yang berfungsi untuk merangsang regenerasi sel, mengecilkan pori-pori, mengurangi kerutan dan meremajakan kulit pada level sellular sehingga wajah menjadi lembap dan kenyal</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 275.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Half Face Scar Resurfacing</h4>
                        <img src="images/treatment-halfface.jpeg" alt="Half Scar" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Teknik perawatan wajah terkini dengan menggunakan laser fractional CO2, mampu mengatasi bopeng serta mengecilkan pori</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 715.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Korean Super Scar Treatment</h4>
                        <img src="images/treatment-koreansuperscar.jpeg" alt="Korean Super Scar" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Perawatan wajah untuk membantu memperbaiki tampilan scar/bekas jerawat bopeng, terutama tipe icepick & boxscar</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 759.000,-</p>
                      </div>
                      <div className="p-4 m-6 bg-white border border-yellow-400 rounded-lg shadow-md flex-shrink-0 w-1/3 transition-transform duration-200 transform hover:scale-105 hover:shadow-md">
                        <h4 className="text-xl text-orange-600 font-bold mb-2">Transforming Scar Resurfacing</h4>
                        <img src="images/treatment-transformingscar.jpeg" alt="Transforming Scar" className=" mb-2 rounded-md" />
                        <p className="text-gray-700">Teknik perawatan kulit wajah terkini menggunakan Laser Fractional CO2 yang dikombinasikan dengan Platelet Rich Plasma (PRP) serta Super Scar Peel yang sangat efektif untuk mengatasi masalah scar/bopeng, pori besar sekaligus untuk rejuvenasi.</p>
                        <p className="text-amber-800 font-semibold mt-2 text-end">Harga: Rp. 1.149.000,-</p>
                      </div>
                  </div>
              </div>
    </div>
  );
};

export default TreatmentList;
