import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://672343212108960b9cc75e87.mockapi.io/questions';

interface Question {
  id: string;
  question: string;
  option: string[];
  answer: string;
}

interface CrudState {
  data: Question[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CrudState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchQuestions = createAsyncThunk('crud/fetchQuestions', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const createQuestion = createAsyncThunk(
  'crud/createQuestion',
  async (newQuestion: { question: string; option: string[]; answer: string }) => {
    const response = await axios.post(API_URL, newQuestion);
    return response.data;
  }
);

export const updateQuestion = createAsyncThunk(
  'crud/updateQuestion',
  async ({
    id,
    updatedQuestion,
  }: {
    id: string;
    updatedQuestion: { question: string; option: string[]; answer: string };
  }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedQuestion);
    return response.data;
  }
);

export const deleteQuestion = createAsyncThunk('crud/deleteQuestion', async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(createQuestion.fulfilled, (state, action: PayloadAction<Question>) => {
        state.data.push(action.payload);
      })
      .addCase(updateQuestion.fulfilled, (state, action: PayloadAction<Question>) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      .addCase(deleteQuestion.fulfilled, (state, action: PayloadAction<string>) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      });
  },
});

export default crudSlice.reducer;
