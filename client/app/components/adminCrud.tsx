'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, createQuestion, updateQuestion, deleteQuestion } from '../redux/features/crudSlice';
import { RootState, AppDispatch } from '../redux/store';

interface FormData {
  id: string;
  question: string;
  answer: string;
  options: string[];
}

const AdminCrudPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.crud);

  const [form, setForm] = useState<FormData>({
    id: '',
    question: '',
    answer: '',
    options: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [visibleDataCount, setVisibleDataCount] = useState(10);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedQuestion = {
      question: form.question,
      option: form.options, // Note: We're using 'option' here to match the API
      answer: form.answer,
    };

    if (isEditing) {
      dispatch(updateQuestion({ id: form.id, updatedQuestion }));
    } else {
      dispatch(createQuestion(updatedQuestion));
    }

    setForm({ id: '', question: '', answer: '', options: [] });
    setIsEditing(false);
  };

  const handleEdit = (item: { id: string; question: string; answer: string; option?: string[] }) => {
    setForm({
      id: item.id,
      question: item.question,
      answer: item.answer,
      options: item.option || [], // Convert 'option' to 'options' for consistency in the form
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteQuestion(id));
  };

  const handleSeeMore = () => {
    setVisibleDataCount((prevCount) => prevCount + 10);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'options') {
      setForm({ ...form, options: value.split(',').map(option => option.trim()) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleCancel = () => {
    setForm({ id: '', question: '', answer: '', options: [] });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">CRUD Questions</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="question"
          placeholder="Enter question"
          value={form.question}
          onChange={handleInputChange}
          className="border px-4 py-2 mr-2"
        />
        <input
          type="text"
          name="answer"
          placeholder="Enter answer"
          value={form.answer}
          onChange={handleInputChange}
          className="border px-4 py-2 mr-2"
        />
        <input
          type="text"
          name="options"
          placeholder="Enter options (comma separated)"
          value={form.options.join(', ')}
          onChange={handleInputChange}
          className="border px-4 py-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mr-2">
          {isEditing ? 'Update' : 'Create'}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2">
            Cancel
          </button>
        )}
      </form>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <table className="table-auto w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Question</th>
                <th className="px-4 py-2">Answer</th>
                <th className="px-4 py-2">Options</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, visibleDataCount).map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.question}</td>
                  <td className="px-4 py-2">{item.answer}</td>
                  <td className="px-4 py-2">{item.option ? item.option.join(', ') : ''}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white px-4 py-2 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-4 py-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {visibleDataCount < data.length && (
            <button 
              onClick={handleSeeMore} 
              className="mt-4 bg-blue-500 text-white px-4 py-2"
            >
              Show More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default AdminCrudPage;