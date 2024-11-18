'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdditionAndSubtraction: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<'addition' | 'subtraction'>('addition');
  const [additionAnswer, setAdditionAnswer] = useState<number | string>('');
  const [subtractionAnswer, setSubtractionAnswer] = useState<number | string>('');
  const [additionQuestion, setAdditionQuestion] = useState<string>('');
  const [subtractionQuestion, setSubtractionQuestion] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const [additionQuestions, setAdditionQuestions] = useState<{ question: string; answer: number }[]>([]);
  const [subtractionQuestions, setSubtractionQuestions] = useState<{ question: string; answer: number }[]>([]);

  const explanation = {
    addition: (
      <>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Penjumlahan?</h2>
        <img src="./img/add.png" alt="addition" className="mb-4" />
        <p className="text-lg text-gray-700">
          Penjumlahan adalah operasi matematika yang digunakan untuk menambahkan dua angka atau lebih untuk mendapatkan jumlah keseluruhan.
        </p>
        <h2 className="text-xl font-semibold text-green-700 mt-4">Cara Mengerjakan Penjumlahan:</h2>
        <p className="text-lg text-gray-700">
          Penjumlahan dengan Cara Menghitung Ulang (Menghitung pada Jari): Kadang-kadang, jika kita belum bisa menghitung dalam kepala, kita bisa menggunakan tangan kita untuk membantu.
        </p>
        <h3 className="text-lg font-semibold text-green-700 mt-4">Contoh:</h3>
        <p className="text-lg text-gray-700">
          Kamu memiliki 3 apel, lalu temanmu memberi 2 apel lagi. Sekarang, berapa banyak apel yang kamu punya? 3 + 2 = 5. Jadi, kamu punya 5 apel sekarang!
        </p>
      </>
    ),
    subtraction: (
      <>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Pengurangan?</h2>
        <img src="./img/sub.png" alt="subtraction" className="mb-4" />
        <p className="text-lg text-gray-700">
          Pengurangan adalah operasi matematika yang digunakan untuk mengurangi jumlah dari angka tertentu.
        </p>
        <h2 className="text-xl font-semibold text-green-700 mt-4">Cara Mengerjakan Pengurangan:</h2>
        <p className="text-lg text-gray-700">
          Saat kita mengurangi angka, kita bisa membayangkan seperti berjalan mundur. Misalnya, jika kamu punya 5 permen dan mengurangi 2 permen, bayangkan kamu mundur dari 5 dan menghitung mundur: 4, 3.
        </p>
        <h3 className="text-lg font-semibold text-green-700 mt-4">Contoh:</h3>
        <p className="text-lg text-gray-700">
          Kamu memiliki 5 permen, lalu kamu memberikan 2 permen kepada temanmu. Berapa permen yang kamu miliki sekarang? 5 - 2 = 3. Jadi, kamu masih memiliki 3 permen.
        </p>
      </>
    ),
  };

  useEffect(() => {
    axios.get('https://672343212108960b9cc75e87.mockapi.io/materials')
      .then((response) => {
        const data = response.data;
        const addition = data.filter((item: any) => item.type === 'penjumlahan');
        const subtraction = data.filter((item: any) => item.type === 'pengurangan');

        setAdditionQuestions(addition);
        setSubtractionQuestions(subtraction);

        if (addition.length > 0) {
          const randomAddition = addition[Math.floor(Math.random() * addition.length)];
          setAdditionQuestion(randomAddition.question);
        }
        if (subtraction.length > 0) {
          const randomSubtraction = subtraction[Math.floor(Math.random() * subtraction.length)];
          setSubtractionQuestion(randomSubtraction.question);
        }
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  const checkAnswer = (input: number, type: 'addition' | 'subtraction') => {
    let correctAnswer;
    if (type === 'addition') {
      correctAnswer = additionQuestions.find((q) => q.question === additionQuestion)?.answer;
    } else {
      correctAnswer = subtractionQuestions.find((q) => q.question === subtractionQuestion)?.answer;
    }

    if (input === correctAnswer) {
      setIsCorrect(true);
      setModalMessage('Jawaban kamu benar! 🎉');
    } else {
      setIsCorrect(false);
      setModalMessage('Jawaban kamu salah. Coba lagi!');
    }

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    if (activeLesson === 'addition' && additionQuestions.length > 0) {
      const randomAddition = additionQuestions[Math.floor(Math.random() * additionQuestions.length)];
      setAdditionQuestion(randomAddition.question);
      setAdditionAnswer('');
    } else if (activeLesson === 'subtraction' && subtractionQuestions.length > 0) {
      const randomSubtraction = subtractionQuestions[Math.floor(Math.random() * subtractionQuestions.length)];
      setSubtractionQuestion(randomSubtraction.question);
      setSubtractionAnswer('');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white text-green-700 p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center lg:text-left">Pilih Materi</h1>
        <button
          onClick={() => setActiveLesson('addition')}
          className={`w-full p-3 mt-2 text-left rounded-md ${activeLesson === 'addition' ? 'text-green-700' : 'hover:text-green-500'}`}
        >
          Penjumlahan
        </button>
        <button
          onClick={() => setActiveLesson('subtraction')}
          className={`w-full p-3 mt-2 text-left rounded-md ${activeLesson === 'subtraction' ? 'text-green-700' : 'hover:text-green-500'}`}
        >
          Pengurangan
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 flex flex-col space-y-8">
        <h1 className="text-4xl font-extrabold text-green-700 text-center lg:text-left">
          Belajar {activeLesson === 'addition' ? 'Penjumlahan' : 'Pengurangan'}
        </h1>

        {/* Box Penjelasan Materi */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Penjelasan Materi</h2>
          {explanation[activeLesson]}
        </section>

        {/* Box Soal */}
        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Soal</h2>
          <p className="text-lg text-gray-700">{activeLesson === 'addition' ? additionQuestion : subtractionQuestion}</p>
          <input
            type="number"
            value={activeLesson === 'addition' ? additionAnswer : subtractionAnswer}
            onChange={(e) =>
              activeLesson === 'addition'
                ? setAdditionAnswer(Number(e.target.value))
                : setSubtractionAnswer(Number(e.target.value))
            }
            className="mt-2 p-2 border-2 border-gray-300 rounded-lg w-full md:w-80 "
            placeholder="Masukkan jawabanmu"
          />
          <button
            onClick={() =>
              checkAnswer(
                activeLesson === 'addition' ? Number(additionAnswer) : Number(subtractionAnswer),
                activeLesson
              )
            }
            className="mt-4 p-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 ml-4"
          >
            Cek Jawaban
          </button>
        </section>
      </div>

{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
      <h2 className="text-2xl font-bold text-center">{isCorrect ? 'Selamat!' : 'Coba Lagi!'}</h2>
      
      {/* Gambar Menampilkan Hasil */}
      <img
        src={`./img/${isCorrect ? 'win.png' : 'lose.png'}`}
        alt={isCorrect ? 'Correct' : 'Incorrect'}
        className="w-full h-auto mx-auto mt-4 animate-zoomInOut"
      />

      <p className="text-center text-lg text-gray-700 mt-4">{modalMessage}</p>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsModalOpen(false)}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          Tutup
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AdditionAndSubtraction;
