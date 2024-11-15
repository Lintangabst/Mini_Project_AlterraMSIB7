'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MultiplicationAndDivision: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<'multiplication' | 'division'>('multiplication');
  const [multiplicationAnswer, setMultiplicationAnswer] = useState<number | string>('');
  const [divisionAnswer, setDivisionAnswer] = useState<number | string>('');
  const [multiplicationQuestion, setMultiplicationQuestion] = useState<string>('');
  const [divisionQuestion, setDivisionQuestion] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const [multiplicationQuestions, setMultiplicationQuestions] = useState<{ question: string; answer: number }[]>([]);
  const [divisionQuestions, setDivisionQuestions] = useState<{ question: string; answer: number }[]>([]);

  // Penjelasan materi
  const explanation = {
    multiplication: (
      <>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Perkalian?</h2>
        <img src="./img/multiply.png" alt="multiplication" />
        <p className="text-lg text-gray-700">
          Perkalian adalah operasi matematika yang digunakan untuk menambah angka yang sama berulang kali.
        </p>
        <h2 className="text-xl font-semibold text-green-700 mt-4">Cara Mengerjakan Perkalian:</h2>
        <p className="text-lg text-gray-700">
          Perkalian dapat dibayangkan seperti penjumlahan berulang. Misalnya, jika kamu memiliki 3 kelompok apel, dan setiap kelompok berisi 4 apel, berapa jumlah total apel yang kamu miliki? 3 x 4 = 12.
        </p>
        <h3 className="text-lg font-semibold text-green-700 mt-4">Contoh:</h3>
        <p className="text-lg text-gray-700">
          Kamu memiliki 5 kotak, dan di dalam setiap kotak ada 3 bola. Berapa total bola yang kamu miliki? 5 x 3 = 15. Jadi, kamu memiliki 15 bola.
        </p>
      </>
    ),
    division: (
      <>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Pembagian?</h2>
        <img src="./img/division.png" alt="division" />
        <p className="text-lg text-gray-700">
          Pembagian adalah operasi matematika yang digunakan untuk membagi jumlah angka menjadi bagian yang lebih kecil.
        </p>
        <h2 className="text-xl font-semibold text-green-700 mt-4">Cara Mengerjakan Pembagian:</h2>
        <p className="text-lg text-gray-700">
          Pembagian dapat dibayangkan seperti membagi sesuatu menjadi beberapa bagian yang sama. Misalnya, jika kamu memiliki 12 permen dan ingin membaginya dengan 4 teman, berapa banyak permen yang didapatkan setiap teman? 12 ÷ 4 = 3.
        </p>
        <h3 className="text-lg font-semibold text-green-700 mt-4">Contoh:</h3>
        <p className="text-lg text-gray-700">
          Kamu memiliki 20 permen dan ingin membaginya menjadi 5 bagian yang sama. Berapa banyak permen yang didapatkan setiap teman? 20 ÷ 5 = 4. Jadi, setiap teman mendapatkan 4 permen.
        </p>
      </>
    ),
  };

  // Fetch questions from the API using Axios
  useEffect(() => {
    axios.get('http://localhost:5000/api/multiplication-questions')
      .then((response) => {
        setMultiplicationQuestions(response.data);
        setMultiplicationQuestion(response.data[0]?.question);
      })
      .catch((error) => console.error('Error fetching multiplication questions:', error));

    axios.get('http://localhost:5000/api/division-questions')
      .then((response) => {
        setDivisionQuestions(response.data);
        setDivisionQuestion(response.data[0]?.question);
      })
      .catch((error) => console.error('Error fetching division questions:', error));
  }, []);

  const checkAnswer = (input: number, type: 'multiplication' | 'division') => {
    let correctAnswer;
    if (type === 'multiplication') {
      correctAnswer = multiplicationQuestions.find((q) => q.question === multiplicationQuestion)?.answer;
    } else {
      correctAnswer = divisionQuestions.find((q) => q.question === divisionQuestion)?.answer;
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
          onClick={() => setActiveLesson('multiplication')}
          className={`w-full p-3 mt-2 text-left rounded-md ${activeLesson === 'multiplication' ? 'text-green-700' : 'hover:text-green-500'}`}
        >
          Perkalian
        </button>
        <button
          onClick={() => setActiveLesson('division')}
          className={`w-full p-3 mt-2 text-left rounded-md ${activeLesson === 'division' ? 'text-green-700' : 'hover:text-green-500'}`}
        >
          Pembagian
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 flex flex-col">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center lg:text-left">Belajar {activeLesson === 'multiplication' ? 'Perkalian' : 'Pembagian'}</h1>

        {/* Penjelasan Materi */}
        <section className="mb-6 bg-white p-6 rounded-lg shadow-md">
          <div className="text-lg text-gray-700">{explanation[activeLesson]}</div>
        </section>

        <section className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{activeLesson === 'multiplication' ? 'Perkalian' : 'Pembagian'} Soal:</h2>
          <div className="mb-4">
            <p className="text-lg text-gray-700">{activeLesson === 'multiplication' ? multiplicationQuestion : divisionQuestion}</p>
            <input
              type="number"
              value={activeLesson === 'multiplication' ? multiplicationAnswer : divisionAnswer}
              onChange={(e) =>
                activeLesson === 'multiplication'
                  ? setMultiplicationAnswer(Number(e.target.value))
                  : setDivisionAnswer(Number(e.target.value))
              }
              className="mt-2 p-2 border-2 border-gray-300 rounded-lg w-full md:w-80"
              placeholder="Masukkan jawabanmu"
            />
            <button
              onClick={() =>
                checkAnswer(
                  activeLesson === 'multiplication' ? Number(multiplicationAnswer) : Number(divisionAnswer),
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

export default MultiplicationAndDivision;
