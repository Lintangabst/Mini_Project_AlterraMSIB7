import React from 'react';

const VideoLearning: React.FC = () => {
  return (
    <div className="relative container mx-auto p-6">
            {/* Gambar di kiri bawah, di luar container */}
            <img
        src="./img/leftvideo.png" // Ganti dengan path gambar yang sesuai
        alt="Left Image"
        className="absolute bottom-0 left-0 w-32 md:w-48 hidden md:block"
      />

      {/* Gambar di kanan atas, di luar container */}
      <img
        src="./img/rightvideo.png" // Ganti dengan path gambar yang sesuai
        alt="Right Image"
        className="absolute top-0 right-0 w-32 md:w-48 hidden md:block"
      />

      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
        Video Pembelajaran (Multiplying & Dividing)
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Di sini kamu dapat menonton video yang akan menjelaskan secara rinci tentang cara mengalikan dan membagi angka dengan benar.
      </p>
      
      {/* Card Container with Preline UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4 bg-white shadow-xl rounded-lg border border-gray-200">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Penjelasan Perkalian</h2>
            <p className="text-gray-600 mb-4">
              Menonton video yang menjelaskan berbagai teknik perkalian, dari dasar hingga tingkat lanjut, untuk meningkatkan pemahaman.
            </p>
            <div className="video-container mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_1" // Ganti dengan ID video yang sesuai
                title="Penjelasan Perkalian"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <button className="btn btn-primary w-full">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        <div className="card p-4 bg-white shadow-xl rounded-lg border border-gray-200">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Penjelasan Pembagian</h2>
            <p className="text-gray-600 mb-4">
              Pelajari cara membagi angka dengan benar dan efektif melalui video instruktif ini.
            </p>
            <div className="video-container mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_2" // Ganti dengan ID video yang sesuai
                title="Penjelasan Pembagian"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <button className="btn btn-primary w-full">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        <div className="card p-4 bg-white shadow-xl rounded-lg border border-gray-200">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Penjelasan Penjumlahan</h2>
            <p className="text-gray-600 mb-4">
              Pelajari cara menjumlahkan angka dengan benar dan efektif melalui video instruktif ini.
            </p>
            <div className="video-container mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_3" // Ganti dengan ID video yang sesuai
                title="Penjelasan Penjumlahan"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <button className="btn btn-primary w-full">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        <div className="card p-4 bg-white shadow-xl rounded-lg border border-gray-200">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Penjelasan Pengurangan</h2>
            <p className="text-gray-600 mb-4">
              Pelajari cara melakukan pengurangan angka dengan benar dan efektif melalui video instruktif ini.
            </p>
            <div className="video-container mb-4">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID_4" // Ganti dengan ID video yang sesuai
                title="Penjelasan Pengurangan"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <button className="btn btn-primary w-full">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLearning;
