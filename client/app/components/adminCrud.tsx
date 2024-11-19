'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, createQuestion, updateQuestion, deleteQuestion } from '../redux/features/crudSlice';
import { RootState, AppDispatch } from '../redux/store';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size on load
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // 768px is commonly considered mobile
    checkMobile();
    
    // Check on resize as well
    window.addEventListener('resize', checkMobile);
    
    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedQuestion = {
      question: form.question,
      option: form.options,
      answer: form.answer,
    };

    const action = isEditing
      ? () =>
          confirmAlert({
            title: 'Confirm Update',
            message: 'Are you sure you want to update this question?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => dispatch(updateQuestion({ id: form.id, updatedQuestion })),
              },
              {
                label: 'No',
              },
            ],
          })
      : () =>
          confirmAlert({
            title: 'Confirm Create',
            message: 'Are you sure you want to create this question?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => dispatch(createQuestion(updatedQuestion)),
              },
              {
                label: 'No',
              },
            ],
          });

    action(); 

    setForm({ id: '', question: '', answer: '', options: [] });
    setIsEditing(false);
  };

  const handleEdit = (item: { id: string; question: string; answer: string; option?: string[] }) => {
    setForm({
      id: item.id,
      question: item.question,
      answer: item.answer,
      options: item.option || [],
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this question?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteQuestion(id)),
        },
        {
          label: 'No',
        },
      ],
    });
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

  if (isMobile) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-xl font-bold">ACCESS THIS PAGE WITH A DESKTOP</h1>
        <p>This page is not available on mobile devices. Please switch to a desktop for better experience.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">CRUD Questions</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input
            type="text"
            name="question"
            placeholder="Enter question"
            value={form.question}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full sm:w-1/3"
          />
          <input
            type="text"
            name="answer"
            placeholder="Enter answer"
            value={form.answer}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full sm:w-1/3"
          />
          <input
            type="text"
            name="options"
            placeholder="Enter options (comma separated)"
            value={form.options.join(', ')}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full sm:w-1/3"
          />
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full sm:w-auto">
            {isEditing ? 'Update' : 'Create'}
          </button>
          {isEditing && (
            <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 w-full sm:w-auto">
              Cancel
            </button>
          )}
        </div>
      </form>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <div className="overflow-x-auto">
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
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-yellow-500 text-white px-4 py-2"
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
          </div>

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
