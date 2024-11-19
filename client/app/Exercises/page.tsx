'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';


// Define the interface for the API response
interface ApiResponse {
  question: string;
  answer: number;
  option: string[]; // Sesuaikan dengan nama yang diterima dari API
}

interface Question {
  question: string;
  answer: number;
  options: string[]; 
}

export default function Exercises() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch the data and specify the type of the response
        const response = await axios.get<ApiResponse[]>('https://672343212108960b9cc75e87.mockapi.io/questions');
        
        // Format ulang data sesuai dengan aplikasi
        const formattedQuestions = response.data.map((item) => ({
          question: item.question,
          answer: Number(item.answer),
          options: item.option, // Gunakan 'option' dari API
        }));

        // Acak dan pilih 20 pertanyaan
        const shuffledQuestions = formattedQuestions.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, 20);

        setQuestions(selectedQuestions);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch questions. Please try again later.');
        setLoading(false);
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  // Fungsi lainnya tetap sama

  const handleAnswerChange = (selectedAnswer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: selectedAnswer,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === String(question.answer)) {
        correctAnswers += 1;
      }
    });
    setScore(correctAnswers);
  };

  const optionsLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-700">Random Math Exercises</h1>

      {loading && (
  <div className="flex justify-center items-center">
    <Image
      src="/img/load.gif" // Path gambar
      alt="Loading..."
      width={64}  // Ukuran gambar sesuai kebutuhan
      height={64} // Ukuran gambar sesuai kebutuhan
      className="sm:w-24 sm:h-24"
    />
  </div>
)}
      {error && <p className="text-center text-red-500">{error}</p>}
      {score === null ? (
        <div>
          {questions.length > 0 && (
            <div className="p-4 sm:p-6 rounded-lg shadow-lg border border-1 border-gray-300 bg-white">
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <span className="text-lg font-semibold text-black mr-4 bg-gray-50 border border-gray-500 rounded-md px-4 py-2">
                  {currentQuestionIndex + 1}
                </span>
                <p className="text-lg sm:text-xl font-semibold text-gray-800">{questions[currentQuestionIndex].question}</p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <div key={idx} className="flex-1">
                    <input
                      type="radio"
                      id={`question-${currentQuestionIndex}-option-${idx}`}
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={answers[currentQuestionIndex] === option}
                      onChange={() => handleAnswerChange(option)}
                      className="peer hidden"
                    />
                    <label
                      htmlFor={`question-${currentQuestionIndex}-option-${idx}`}
                      className={`cursor-pointer block p-4 sm:p-5 border-2 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200 ${
                        answers[currentQuestionIndex] === option
                          ? 'text-black border-green-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'
                      } peer-checked:text-black`}
                    >
                      <span className="font-medium text-black rounded-md bg-white py-2 px-3 border border-1">
                        {optionsLabels[idx]}
                      </span>{' '}
                      {option}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between">
                {currentQuestionIndex > 0 && (
                  <button
                    onClick={handlePreviousQuestion}
                    className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition duration-200"
                  >
                    Previous
                  </button>
                )}

                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Your Score</h2>
          <p className="text-lg sm:text-xl text-gray-700">
            You answered <span className="font-bold">{score}</span> out of{' '}
            <span className="font-bold">{questions.length}</span> questions correctly.
          </p>
        </div>
      )}
    </div>
  );
}
