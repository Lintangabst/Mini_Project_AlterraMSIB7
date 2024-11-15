// ecoQuestions.js
const ecoQuestions = [
  { 
    question: "Di taman sekolah, ada 5 pohon. Jika siswa menanam 3 pohon lagi, berapa total pohon yang ada di taman sekarang?", 
    answer: 8,
    type: "penjumlahan"
  },
  { 
    question: "Dina membawa 6 botol minum plastik ke sekolah. Ia mendaur ulang 2 botol. Berapa botol yang tersisa?", 
    answer: 4,
    type: "pengurangan"
  },
  { 
    question: "Di kelas Budi, ada 10 siswa yang membawa bekal tanpa plastik. Jika ada 4 siswa lagi yang ikut membawa bekal tanpa plastik, berapa total siswa yang membawa bekal tanpa plastik?", 
    answer: 14,
    type: "penjumlahan"
  },
  { 
    question: "Ibu menanam 3 bunga di halaman rumah. Setiap bulan, ibu menambahkan 2 bunga lagi. Setelah 3 bulan, berapa total bunga di halaman rumah?", 
    answer: 9,
    type: "perkalian"
  },
  { 
    question: "Tina memilah 8 kertas bekas untuk didaur ulang. Setelah itu, ia menambahkan 5 kertas lagi ke tumpukan. Berapa total kertas yang siap didaur ulang?", 
    answer: 13,
    type: "penjumlahan"
  },
  { 
    question: "Di taman kota, ada 12 anak yang menanam bunga. Setiap anak menanam 2 bunga. Berapa total bunga yang ditanam di taman kota?", 
    answer: 24,
    type: "perkalian"
  },
  { 
    question: "Andi mengumpulkan 15 daun kering untuk kompos. Jika ia menemukan 5 daun lagi di halaman, berapa total daun kering yang dikumpulkan?", 
    answer: 20,
    type: "penjumlahan"
  },
  { 
    question: "Pak Tani memiliki 20 pohon di kebunnya. Ia menebang 5 pohon yang sudah tua. Berapa pohon yang tersisa?", 
    answer: 15,
    type: "pengurangan"
  },
  { 
    question: "Di sekolah, ada program menanam 8 bibit pohon setiap tahun. Setelah 4 tahun, berapa banyak pohon yang telah ditanam?", 
    answer: 32,
    type: "perkalian"
  },
  { 
    question: "Kelas Siti mendaur ulang 18 botol plastik. Setiap siswa mendaur ulang 2 botol. Berapa banyak siswa yang ikut dalam kegiatan daur ulang?", 
    answer: 9,
    type: "pembagian"
  },
  { 
    question: "Rudi menanam 7 tanaman di rumahnya setiap bulan. Berapa banyak tanaman yang ia tanam setelah 5 bulan?", 
    answer: 35,
    type: "perkalian"
  },
  { 
    question: "Dewi memiliki 10 kantong plastik di rumah. Setiap hari, ia mengurangi 2 kantong plastik dengan menggunakan kantong kain. Berapa kantong plastik yang tersisa setelah 3 hari?", 
    answer: 4,
    type: "pengurangan"
  },
  { 
    question: "Di pasar, ada 16 penjual yang menggunakan kantong plastik. Setelah diberikan edukasi, 10 penjual berhenti menggunakannya. Berapa penjual yang masih menggunakan kantong plastik?", 
    answer: 6,
    type: "pengurangan"
  },
  { 
    question: "Keluarga Budi mengumpulkan 20 botol plastik untuk didaur ulang setiap minggu. Jika mereka mengumpulkan botol selama 4 minggu, berapa total botol yang dikumpulkan?", 
    answer: 80,
    type: "perkalian"
  },
  { 
    question: "Di desa, ada 14 anak yang menanam pohon. Setiap anak menanam 3 pohon. Berapa pohon yang ditanam oleh seluruh anak?", 
    answer: 42,
    type: "perkalian"
  },
  { 
    question: "Siti mendaur ulang 5 botol plastik setiap hari. Dalam 6 hari, berapa botol plastik yang sudah ia daur ulang?", 
    answer: 30,
    type: "perkalian"
  },
  { 
    question: "Di kebun sekolah, ada 9 pohon yang ditanam. Jika setiap siswa menambahkan 1 pohon, dan ada 8 siswa yang ikut, berapa total pohon yang ada?", 
    answer: 17,
    type: "penjumlahan"
  },
  { 
    question: "Di taman kota, ada 25 pohon. Jika 5 pohon baru ditanam, berapa total pohon di taman sekarang?", 
    answer: 30,
    type: "penjumlahan"
  },
  { 
    question: "Di kelas, ada 13 anak yang membawa bekal tanpa plastik. Jika 7 anak lagi ikut, berapa anak yang membawa bekal tanpa plastik sekarang?", 
    answer: 20,
    type: "penjumlahan"
  },
  { 
    question: "Lina memiliki 6 tas kain. Jika ia membuat 3 tas kain lagi, berapa total tas kain yang ia miliki?", 
    answer: 9,
    type: "penjumlahan"
  },
  { 
    question: "Budi dan teman-temannya menanam 15 bunga di taman. Jika mereka menambah 10 bunga lagi, berapa total bunga di taman sekarang?", 
    answer: 25,
    type: "penjumlahan"
  },
  { 
    question: "Dina memiliki 8 pohon kecil di rumah. Jika ia menambah 2 pohon lagi, berapa pohon yang ia miliki sekarang?", 
    answer: 10,
    type: "penjumlahan"
  },
  { 
    question: "Di sekolah, ada program mendaur ulang 10 botol plastik setiap minggu. Setelah 3 minggu, berapa botol plastik yang sudah didaur ulang?", 
    answer: 30,
    type: "perkalian"
  },
  { 
    question: "Doni memiliki 10 tumbler untuk minum air. Jika ia membeli 5 tumbler lagi, berapa tumbler yang ia miliki sekarang?", 
    answer: 15,
    type: "penjumlahan"
  },
  { 
    question: "Sekolah mengadakan program menanam 5 pohon setiap bulan. Setelah 6 bulan, berapa pohon yang telah ditanam?", 
    answer: 30,
    type: "perkalian"
  },
  { 
    question: "Di taman desa, ada 10 anak yang menanam 2 pohon masing-masing. Berapa pohon yang telah ditanam di taman desa?", 
    answer: 20,
    type: "perkalian"
  },
  { 
    question: "Mira membawa 7 kantong belanja kain. Jika temannya memberikan 3 kantong lagi, berapa kantong kain yang Mira miliki?", 
    answer: 10,
    type: "penjumlahan"
  },
  { 
    question: "Siswa di sekolah berhasil mengumpulkan 16 botol plastik untuk didaur ulang. Jika mereka mengumpulkan 4 botol lagi, berapa total botol yang terkumpul?", 
    answer: 20,
    type: "penjumlahan"
  },
  { 
    question: "Keluarga Budi memiliki 12 tumbler untuk mengurangi botol plastik. Jika mereka membeli 4 tumbler lagi, berapa total tumbler yang mereka miliki sekarang?", 
    answer: 16,
    type: "penjumlahan"
  },
  { 
    question: "Di kampung, ada program menanam 4 pohon setiap minggu. Setelah 5 minggu, berapa pohon yang telah ditanam?", 
    answer: 20,
    type: "perkalian"
  }
];

module.exports = ecoQuestions;
