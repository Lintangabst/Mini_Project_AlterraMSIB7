'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const MultiplicationAndDivision: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<'multiplication' | 'division'>('multiplication');
  const [answer, setAnswer] = useState<number | string>('');
  const [question, setQuestion] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const [questions, setQuestions] = useState<{ question: string; answer: number; type: 'perkalian' | 'pembagian' }[]>([]);

  // Penjelasan materi
  const explanation = {
    multiplication: (
      <>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Perkalian?</h2>
        <Image src="/img/multiply.png" alt="multiplication" width={500} height={300} />
        <p className="text-lg text-gray-700">
          Perkalian adalah operasi matematika yang digunakan untuk menambah angka yang sama berulang kali.
        </p>
        <h2 className="text-xl font-semibold text-green-700 mt-4">Cara Mengerjakan Perkalian:</h2>
        <p className="text-lg text-gray-700">
          Perkalian dapat dibayangkan seperti penjumlahan berulang. Misalnya, jika kamu memiliki 3 kelompok apel, dan setiap kelompok berisi 4 apel, berapa jumlah total apel yang kamu miliki? 3 x 4 = 12.
        </p>
      </>
    ),
    division: (
      <>
        <h2 className="text-xl font-semibold text-green-700 mb-2">Apa itu Pembagian?</h2>
        <Image src="/img/division.png" alt="division" width={500} height={300} />
        <p className="text-lg text-gray-700">
          Pembagian adalah operasi matematika yang digunakan untuk membagi jumlah angka menjadi bagian yang lebih kecil.
        </p>
        <h2 className="text-xl font-semibold text-green-700 mt-4">Cara Mengerjakan Pembagian:</h2>
        <p className="text-lg text-gray-700">
          Pembagian dapat dibayangkan seperti membagi sesuatu menjadi beberapa bagian yang sama. Misalnya, jika kamu memiliki 12 permen dan ingin membaginya dengan 4 teman, berapa banyak permen yang didapatkan setiap teman? 12 ÷ 4 = 3.
        </p>
      </>
    ),
  };

  // Fetch questions from mock API and filter by type
  useEffect(() => {
    axios.get('https://672343212108960b9cc75e87.mockapi.io/materials')
      .then((response) => {
        const allQuestions = response.data;
        const filteredQuestions = allQuestions.filter(
          (q: { type: string }) => q.type === (activeLesson === 'multiplication' ? 'perkalian' : 'pembagian')
        );

        setQuestions(filteredQuestions);

        // Pilih soal secara acak
        if (filteredQuestions.length > 0) {
          const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
          setQuestion(randomQuestion.question);
        }
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }, [activeLesson]);

  const checkAnswer = (input: number) => {
    const correctAnswer = questions.find((q) => q.question === question)?.answer;
    
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
            <p className="text-lg text-gray-700">{question}</p>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(Number(e.target.value))}
              className="mt-2 p-2 border-2 border-gray-300 rounded-lg w-full md:w-80"
              placeholder="Masukkan jawabanmu"
            />
            <button
              onClick={() => checkAnswer(Number(answer))}
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
            
            {/* Gambar Menampilkan Hasil */}
            <Image
              src={`./img/${isCorrect ? 'win.png' : 'lose.png'}`}
              alt={isCorrect ? 'Correct' : 'Incorrect'}
              width={500}
              height={300}
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

export default MultiplicationAndDivision;
