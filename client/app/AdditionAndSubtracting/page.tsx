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

  // Penjelasan materi
  const explanation = {
    addition: (
      <>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Penjumlahan?</h2>
        <img src="./img/add.png" alt="addition" />
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
        <img src="./img/sub.png" alt="subtracting" />
        <p className="text-lg text-gray-700">
          Pengurangan adalah operasi matematika yang digunakan untuk mengurangi jumlah dari angka tertentu.
        </p>
        <h2 className="text-xl font-semibold text-green-700 mt-4">Pengurangan dengan Menghitung Mundur:</h2>
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

  // Fetch questions from the API using Axios
  useEffect(() => {
    axios.get('http://localhost:5000/api/addition-questions')
      .then((response) => {
        setAdditionQuestions(response.data);
        setAdditionQuestion(response.data[0]?.question);
      })
      .catch((error) => console.error('Error fetching addition questions:', error));

    axios.get('http://localhost:5000/api/subtraction-questions')
      .then((response) => {
        setSubtractionQuestions(response.data);
        setSubtractionQuestion(response.data[0]?.question);
      })
      .catch((error) => console.error('Error fetching subtraction questions:', error));
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
      setModalMessage('Jawaban kamu benar! 🎉 Luar biasa!');
    } else {
      setIsCorrect(false);
      setModalMessage('Jawaban kamu salah. Coba lagi! 😅 Jangan khawatir, latihan terus!');
    }

    setIsModalOpen(true);
  };

  return (
<div className="flex flex-col lg:flex-row min-h-screen bg-white">
  {/* Sidebar */}
  <div className="w-full lg:w-64 bg-gray-50 text-green-700 p-6 space-y-4 shadow-xl">
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
  <div className="flex-1 p-6 flex flex-col">
    <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center lg:text-left">Belajar {activeLesson === 'addition' ? 'Penjumlahan' : 'Pengurangan'}</h1>

    {/* Penjelasan Materi */}
    <section className="mb-6 bg-white p-6 rounded-lg shadow-md">
      <div className="text-lg text-gray-700">{explanation[activeLesson]}</div>
    </section>

    <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">{activeLesson === 'addition' ? 'Penjumlahan' : 'Pengurangan'} Soal:</h2>
      <div className="mb-4">
        <p className="text-lg text-gray-700">{activeLesson === 'addition' ? additionQuestion : subtractionQuestion}</p>
        <input
          type="number"
          value={activeLesson === 'addition' ? additionAnswer : subtractionAnswer}
          onChange={(e) =>
            activeLesson === 'addition'
              ? setAdditionAnswer(Number(e.target.value))
              : setSubtractionAnswer(Number(e.target.value))
          }
          className="mt-2 p-2 border-2 border-gray-300 rounded-lg w-full md:w-80"
          placeholder="Masukkan jawabanmu"
        />
        <button
          onClick={() =>
            checkAnswer(
              activeLesson === 'addition' ? Number(additionAnswer) : Number(subtractionAnswer),
              activeLesson
            )
          }
          className="ml-2 mt-4 p-2 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
        >
          Cek Jawaban
        </button>
      </div>
    </section>
  </div>

  {/* Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
        <h2 className="text-2xl font-bold text-center">{isCorrect ? 'Selamat!' : 'Coba Lagi!'}</h2>
        <img
          src={`./img/${isCorrect ? 'win.png' : 'lose.png'}`}
          alt={isCorrect ? 'Correct' : 'Incorrect'}
          className="w-full h-full mx-auto mt-4 animate-zoomInOut"
        />
        <p className="text-center text-lg text-gray-700 mt-4">{modalMessage}</p>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsModalOpen(false);
              window.location.reload(); // Refresh the page
            }}
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
