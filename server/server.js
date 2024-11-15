const express = require('express');
const cors = require('cors');
const ecoQuestions = require('./ecoQuestions'); // Impor soal eco-friendly
const questionsData = require('./questionsData');

const app = express();
const PORT = 5000;

// CORS middleware
app.use(cors());

// Soal cerita penjumlahan awal
let additionQuestions = [
  { 
    question: "Andi memiliki 5 apel, lalu dia membeli 3 apel lagi. Berapa apel yang dimiliki Andi sekarang?", 
    answer: 8 
  },
  { 
    question: "Di kebun, ada 12 pohon mangga. Setiap pohon menghasilkan 4 mangga. Berapa banyak mangga yang ada di kebun?", 
    answer: 48 
  },
  { 
    question: "Siti memiliki 7 buku. Temannya memberikan 6 buku lagi. Berapa banyak buku yang dimiliki Siti sekarang?", 
    answer: 13 
  },
  ...ecoQuestions.filter(q => q.type === 'penjumlahan') // Filter untuk soal penjumlahan
];

// Soal cerita pengurangan awal
let subtractionQuestions = [
  { 
    question: "Andi memiliki 10 apel, lalu dia memberi 4 apel kepada temannya. Berapa apel yang dimiliki Andi sekarang?", 
    answer: 6 
  },
  { 
    question: "Di kebun, ada 20 pohon mangga. Setiap pohon menghasilkan 8 mangga. Petani memetik 10 mangga dari setiap pohon. Berapa banyak mangga yang masih ada di kebun?", 
    answer: 200 
  },
  { 
    question: "Siti memiliki 15 buku. Temannya meminjamkan 5 buku. Berapa banyak buku yang dimiliki Siti sekarang?", 
    answer: 10 
  },
  ...ecoQuestions.filter(q => q.type === 'pengurangan') // Filter untuk soal pengurangan
];

// Soal cerita perkalian awal
let multiplicationQuestions = [
  { 
    question: "Andi memiliki 4 keranjang, setiap keranjang berisi 5 apel. Berapa banyak apel yang dimiliki Andi?", 
    answer: 20 
  },
  { 
    question: "Di kebun, ada 8 pohon jeruk. Setiap pohon menghasilkan 12 jeruk. Berapa banyak jeruk yang ada di kebun?", 
    answer: 96 
  },
  { 
    question: "Siti membeli 6 paket buku, setiap paket berisi 7 buku. Berapa buku yang dibeli Siti?", 
    answer: 42 
  },
  ...ecoQuestions.filter(q => q.type === 'perkalian') // Filter untuk soal perkalian
];

// Soal cerita pembagian awal
let divisionQuestions = [
  { 
    question: "Andi memiliki 20 apel dan ingin membagikannya kepada 4 temannya. Berapa banyak apel yang didapatkan setiap teman?", 
    answer: 5 
  },
  { 
    question: "Ada 60 jeruk di kebun, dan petani ingin membagi jeruk tersebut menjadi 6 kantong. Berapa banyak jeruk yang ada di setiap kantong?", 
    answer: 10 
  },
  { 
    question: "Siti membeli 24 buku dan ingin membagikan buku-buku tersebut ke dalam 3 kotak. Berapa banyak buku yang ada di setiap kotak?", 
    answer: 8 
  },
  ...ecoQuestions.filter(q => q.type === 'pembagian') // Filter untuk soal pembagian
];

// Soal-soal tambahan untuk multiple choice
const multipleChoiceQuestions = [
  {
    question: "Berapa hasil dari 2 + 3?",
    options: [4, 5, 6, 7],
    answer: 5
  },
  {
    question: "Berapakah 10 x 2?",
    options: [15, 20, 25, 30],
    answer: 20
  },
  {
    question: "Berapa hasil dari 50 - 25?",
    options: [20, 25, 30, 35],
    answer: 25
  },
  // Tambahkan lebih banyak soal sesuai kebutuhan
  ...questionsData
];

// Fungsi untuk mengacak urutan soal
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Tukar elemen
  }
  return array;
}

// API untuk mendapatkan soal penjumlahan dengan urutan acak
app.get('/api/addition-questions', (req, res) => {
  const shuffledQuestions = shuffle([...additionQuestions]); // Buat salinan array dan acak
  res.json(shuffledQuestions);
});

// API untuk mendapatkan soal pengurangan dengan urutan acak
app.get('/api/subtraction-questions', (req, res) => {
  const shuffledQuestions = shuffle([...subtractionQuestions]); // Buat salinan array dan acak
  res.json(shuffledQuestions);
});

// API untuk mendapatkan soal perkalian dengan urutan acak
app.get('/api/multiplication-questions', (req, res) => {
  const shuffledQuestions = shuffle([...multiplicationQuestions]); // Buat salinan array dan acak
  res.json(shuffledQuestions);
});

// API untuk mendapatkan soal pembagian dengan urutan acak
app.get('/api/division-questions', (req, res) => {
  const shuffledQuestions = shuffle([...divisionQuestions]); // Buat salinan array dan acak
  res.json(shuffledQuestions);
});

// API baru untuk mendapatkan soal multiple choice secara acak
app.get('/api/random-exercises', (req, res) => {
  const shuffledQuestions = shuffle([...multipleChoiceQuestions]).slice(0, 20); // Ambil 20 soal acak
  res.json(shuffledQuestions);
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
