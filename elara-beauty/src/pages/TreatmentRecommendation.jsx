import React, { useState } from "react";
import styles from '../assets/styles/global.module.css';

const TreatmentRecommendation = () => {
    // State untuk menyimpan data formulir
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [skinType, setSkinType] = useState("");
    const [complaint, setComplaint] = useState("");
    const [respond, setRespond] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    // Penyimpanan Key API OpenAI 
    const API_KEY = import.meta.env.VITE_API_KEY;

    // Fungsi untuk menangani pengiriman formulir
    async function handleSubmit(e) {
        // Set state isSubmit menjadi true saat pengiriman formulir dimulai
        setIsSubmit(true);
        // Menghentikan perilaku default dari event submit agar formulir tidak dikirim secara otomatis
        e.preventDefault();
        
    // Mendefinisikan prompt untuk model AI    
    const promptAwal =
    'Kamu adalah seorang dokter kecantikan di Elara Beauty. Jawab pertanyaan customer untuk membantu masalah. Berikan saran Treatment sesuai layanan menu yang tersedia sebagai berikut.';

    const acneMenuDesc = 'Acne Treatment terdiri dari:\n1. Glow Acne Peel: Mengangkat sel kulit mati, mengeringkan jerawat, melunakkan komedo, memudarkan bekas jerawat, dan membuat kulit lebih berkilau. Harga: Rp. 200.000,-\n2. Acne Cure: Terapi Laser Diode 1450nm yang sangat efektif untuk mengurangi ukuran kelenjar minyak, sehingga mencegah tumbuhnya jerawat. Harga: Rp. 459.000,-\n3. IPL Acne Active/Redness: Perawatan kulit dengan IPL (Intense Pulsed Light) panjang gelombang 430-1200nm yang efektif membunuh P.Acnes sehingga mengeringkan jerawat yang sudah ada dan mampu mengatasi bekas jerawat kemerahan (redness). Harga: Rp. 295.000,-\n4. Meso Cell Acne: Teknik mesotherapy yang bertujuan untuk mengeringkan jerawat, mengurangi minyak, dan peradangan. Harga: Rp. 250.000,-\n5. Korean Clear Acne Advance: Perpaduan teknologi Laser Diode 1450nm dengan Korean Black Rice Peel serta serum acne untuk mengurangi ukuran kelenjar minyak sehingga mencegah timbulnya jerawat baru. Harga: Rp. 705.00.000,-\n6. Korean Clear Acne Premium: Perpaduan perawatan Intense Pulsed Light dengan Korean Black Rice Peel serta serum acne untuk mengeringkan jerawat serta menghaluskan kulit. Harga: Rp. 650.000,-';

    const brighteningMenuDesc = 'Brightening Treatment terdiri dari:\n1. Glow Bright Peel: Membantu mengangkat sel kulit mati, menyerahkan, dan meratakan warna kulit, membuat kulit lebih berkilau. Harga: Rp. 146.000,-\n2. Meco Cell Snow White: Teknik mesotherapy yang dapat mencerahkan dan melembabkan kulit dengan ekstrak phyllantus emblica dan asam amino. Harga: Rp. 275.000,-\n3. IPL Shower Bright: Teknik pencerahan dan peremajaan kulit menggunakan teknologi IPL (Intense Pulsed Light) dengan panjang gelombang 725-1200 nm yang dapat mencegah kulit kendur dan mengurangi kerutan halus. Harga: Rp. 315.000,-\n4. Enzymatic Pumpkin Peel: Meremajakan kulit dengan fermentasi buah labu kuning yang kaya antioksidan (B-karoten, omega 3, omega 6, & flavonoid). Harga: Rp. 159.000,-\n5. Crystal Clear Laser: Perpaduan teknologi Laser Diode 1450nm dikombinasikan dengan IPL (Intense Pulsed Light) dan Meso Therapy Translucent White Serum, efektif untuk mencerahkan wajah seketika dan menghambat pembentukan jerawat sehingga kulit wajah tidak terlalu berminyak, glowing, dan cerah. Harga: Rp. 1.250.000,-\n6. Bright Booster Laser: Perpaduan perawatan menggunakan Laser Diode 1450nm yang dipadukan dengan teknik mesotherapy translucent white serum, bermanfaat untuk menutrisi kulit dan merangsang pembentukan kolagen sehingga wajah tampak cerah, kenyal, dan glowing. Harga: Rp. 860.000,-\n7. DL Brightening C Treatment : Teknik mesotherapy yang dapat mencerahkan kulit, memudarkan flek hitam dan bekas jerawat hitam dan merah (PIE & PIH) dengan vit C. Harga: Rp. 250.000,-';

    const scarAndPoreMenuDesc = 'Scar and Pore Treatment terdiri dari:\n1. Platelet Rich Plasma Treatment: Perawatan wajah dengan Plasma Darah yang kaya akan Trombosit atau PRP (Platelet Rich Plasma), memiliki kemampuan unik untuk merangsang produksi kolagen dan elastin yang berfungsi untuk meregenerasi pembentukan sel kulit baru dan meremajakan kulit pada kasus scar bekas jerawat atau cacar air, kerutan, dan pigmentasi sehingga kulit tampak lebih muda, halus, dan kencang. Harga: Rp. 576.000,-\n2. Fibroblast Simulator: Teknik mesotherapy dengan 5 growth factor yang berfungsi untuk merangsang regenerasi sel, mengecilkan pori-pori, mengurangi kerutan, dan meremajakan kulit pada level selular sehingga wajah menjadi lembap dan kenyal. Harga: Rp. 275.000,-\n3. Half Face Scar Resurfacing: Teknik perawatan wajah terkini dengan menggunakan laser fractional CO2, mampu mengatasi bopeng serta mengecilkan pori. Harga: Rp. 715.000,-\n4. Korean Super Scar Treatment: Perawatan wajah untuk membantu memperbaiki tampilan scar/bekas jerawat bopeng, terutama tipe icepick & boxscar. Harga: Rp. 759.000,-\n5. Transforming Scar Resurfacing: Teknik perawatan kulit wajah terkini menggunakan Laser Fractional CO2 yang dikombinasikan dengan Platelet Rich Plasma (PRP) serta Super Scar Peel yang sangat efektif untuk mengatasi masalah scar/bopeng, pori besar sekaligus untuk rejuvenasi. Harga: Rp. 1.149.000,-';

    // Menggabungkan teks dari variabel promptAwal, acneMenuDesc, brighteningMenuDesc, dan scarAndPoreMenuDesc
    // serta data formulir seperti nama, usia, jenis kulit, dan keluhan untuk membentuk pesan yang akan dikirim ke API
    const prompt = `${promptAwal} ${acneMenuDesc} ${brighteningMenuDesc} ${scarAndPoreMenuDesc}\n\nNama: ${name}. Usia: ${age}. Jenis Kulit: ${skinType}. Keluhan: ${complaint}`;

    // Membuat objek APIBody yang akan dikirim ke API OpenAI untuk mendapatkan respons
    const APIBody = {
        model: 'gpt-4', // Menentukan model yang akan digunakan oleh API untuk menghasilkan respons
        messages: [{ role: 'user', content: prompt }] // Mengatur pesan yang akan digunakan sebagai masukan untuk menghasilkan respons
    };

    try {
        // Mengirim permintaan POST ke endpoint API OpenAI
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', // Jenis konten yang dikirimkan dalam permintaan
                Authorization: 'Bearer ' + API_KEY // Menyertakan kunci API untuk otorisasi
            },
            body: JSON.stringify(APIBody) // Mengirimkan data dalam format JSON sebagai isi permintaan
        });

        // Memeriksa apakah respons dari API berhasil diterima
        if (!response.ok) {
            throw new Error('Failed to fetch'); // Jika gagal, tampilkan pesan kesalahan
        }

        // Mengonversi respons API menjadi format JSON
        const data = await response.json();

        // Mengatur respons dari API sebagai nilai dari state 'respond'
        setRespond(data.choices[0].message.content);
        
        // Mengosongkan nilai formulir setelah pengiriman berhasil
        setName("");
        setAge("");
        setSkinType("");
        setComplaint("");
    } catch (error) {
        // ... penanganan error jika pengiriman gagal ...
    } finally {
        setIsSubmit(false);
    }
        }
    
  return (
    <div className="mx-auto">
        <div className="bg-gray-50 py-16 mx-auto pt-20">
        <p className={`${styles.subtitleFont} mt-3 text-center font-bold text-xl text-orange-600 ps-16 pb-2`}>HASIL NYATA</p>
        <p className={`${styles.subtitleFont} text-center font-bold text-2xl text-amber-600 ps-16 pb-4`}> Mereka Telah Mencoba dan Membuktikan Hasilnya</p>
        {/* Bukti Pengguna Elara */}
            <div className="flex justify-center items-center">
                <div className="carousel carousel-center max-w-md p-4 space-x-4 border border-orange-300 shadow-md rounded-box">
                    <div className="carousel-item">
                        <div className="carousel-item w-full">
                            <div className="diff aspect-[4/3] w-96 h-96 rounded-full">
                                <div className="diff-item-1">
                                    <img alt="daisy" src="images/breakout.png" />
                                </div>
                                <div className="diff-item-2">
                                    <img alt="daisy" src="images/clear.png" />
                                </div>
                            <div className="diff-resizer"></div>
                        </div> 
                    </div>
                </div> 
                    <div className="carousel-item">
                        <div className="carousel-item w-full">
                            <div className="diff aspect-[4/3] w-96 h-96 rounded-full">
                            <   div className="diff-item-1">
                                    <img alt="daisy" src="images/after3.png" />
                                </div>
                                <div className="diff-item-2">
                                    <img alt="daisy" src="images/before3.png" />
                                </div>
                                <div className="diff-resizer"></div>
                            </div> 
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <div className="carousel-item w-full">
                            <div className="diff aspect-[4/3] w-96 h-96 rounded-full">
                                <div className="diff-item-1">
                                    <img alt="daisy" src="images/before.png" />
                                </div>
                                <div className="diff-item-2">
                                    <img alt="daisy" src="images/after.png" />
                                </div>
                                <div className="diff-resizer"></div>
                            </div> 
                        </div>
                    </div> 
                    <div className="carousel-item">
                        <div className="carousel-item w-full">
                            <div className="diff aspect-[4/3] w-96 h-96 rounded-full">
                                <div className="diff-item-1">
                                    <img alt="daisy" src="images/before2.png" />
                                </div>
                                <div className="diff-item-2">
                                    <img alt="daisy" src="images/after2.png" />
                                </div>
                                <div className="diff-resizer"></div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        {/* Perkenalan Skin Genie */}
        <div className="bg-amber-50 pt-10 ">
        <h2 className={`${styles.logoFont} mt-5 text-center text-4xl text-orange-700 ps-16 pb-4`}>Treatment Recommendation</h2>
            <div className="content-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-2">
                        <div className="flex justify-center items-center">
                            <img
                            src="/images/skingenie.png"
                            className="h-96 w-auto md:h-96 rounded-full"
                            alt="Skin Gennie"
                            />
                        </div>
                    <div className="flex flex-col justify-center">
                        <p className={`${styles.subtitleFont} text-xl font-semibold text-gray-700 `}>
                        Hai! Aku Skin Genie, Teman Perawatan Kulitmu di Elara Beauty!
                        </p>
                        <p className={`${styles.subtitleFont} ms-2 text-lg text-gray-600`}>
                        Halo! Senang sekali bisa berkenalan denganmu. Aku Skin Genie, asisten kecantikan bertenaga AI dari Elara Beauty. Aku hadir untuk membantumu mencapai kulit sehat dan bercahaya impianmu.
                        </p>
                    </div>
                </div>
            </div> 
        <div className="max-w-md mx-auto pt-20">
        {/* Formulir */}
            <p className={`${styles.subtitleFont} text-2xl font-semibold text-yellow-500 dark:text-white text-center`}>
                Yuk, isi form berikut agar aku bisa Analisa Kebutuhan Kulitmu!
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="my-4">
                                <label htmlFor="name" className="block mb-2 text-orange-800">Nama:</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="Nama" required className="w-full border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 px-4 py-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="age" className="block mb-2 text-orange-800">Usia:</label>
                                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} id="age" name="age" placeholder="Usia" required className="w-full border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 px-4 py-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="skinType" className="block mb-2 text-orange-800">Jenis Kulit:</label>
                                <select id="skinType" value={skinType} onChange={(e) => setSkinType(e.target.value)} name="skinType" placeholder="Jenis Kulit" required className="w-full border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 px-4 py-2">
                                    <option value="">Pilih jenis kulit</option>
                                    <option value="Kulit Normal">Kulit Normal</option>
                                    <option value="Kulit Kering">Kulit Kering</option>
                                    <option value="Kulit Berminyak">Kulit Berminyak</option>
                                    <option value="Kulit Kombinasi">Kulit Kombinasi</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="complaint" className="block mb-2 text-orange-800">Keluhan:</label>
                                <textarea id="complaint" value={complaint} onChange={(e) => setComplaint(e.target.value)} placeholder="Keluhan" required name="complaint" className="w-full border border-orange-300 rounded-md focus:outline-none focus:border-amber-500 px-4 py-2"></textarea>
                            </div>
                                <div className="flex items-end justify-end">
                                    {/* Tombol Kirim */}
                                    <button
                                        type="submit" // Tombol ini adalah tipe 'submit' yang akan mengirimkan formulir
                                        className={`py-2 px-4 rounded transition duration-300 ${
                                            isSubmit
                                                ? "bg-gray-400 text-white cursor-not-allowed" // Jika sedang mengirim, tombol akan ditampilkan dengan warna abu-abu dan tidak dapat diklik
                                                : "bg-amber-500 text-white hover:bg-amber-600" // Jika tidak sedang mengirim, tombol akan ditampilkan dengan warna oranye dan akan berubah warna saat dihover
                                        }`}
                                        disabled={isSubmit} // Tombol akan dinonaktifkan saat sedang mengirim
                                    >
                                        {isSubmit ? "Mengirim..." : "Kirim"} {/* Teks tombol akan berubah sesuai dengan status pengiriman */}
                                    </button>
                                </div>

            </form>
                {/* Respon dari Skin Genie */}
                    <div className="mt-8">
                    <p className={`${styles.subtitleFont} text-2xl font-semibold text-yellow-500 dark:text-white`}>
                        Skin Genie :
                    </p>
                    {respond && (
                        < div className="chat chat-end me-16 mt-4">
                        <div className="chat-bubble chat-bubble-warning">{respond}</div>
                    </div>
                    )}
                    <div className="flex items-end justify-end">
                        <img
                            src="/images/skingenie2.png"
                            className="h-36 w-auto md:h-36 rounded-full pb-2"
                            alt="Skin Gennie"
                        />
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TreatmentRecommendation;
