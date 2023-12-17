import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exams: [],
  loading: false,
  error: null,
};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setExamStart: (state, action) => {
      state.courses = action.payload;
    },
    setExamSuccess: (state, action) => {
      state.loading = false;
      state.exams = action.payload[0].data;
    },
    setExamFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getExamStart: state => {
      state.loading = true;
      state.error = null;
    },
    getExamSuccess: (state, action) => {
      state.loading = false;
      state.exams = action.payload;
    },
    getExamFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteExamStart: state => {
      state.loading = true;
      state.error = null;
    },
    deleteExamSuccess: (state, action) => {
      state.loading = false;
      state.exams = state.exams.filter(exam => exam.id !== action.payload);
    },
    deleteExamFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateExamStart: state => {
      state.loading = true;
      state.error = null;
    },
    updateExamSuccess: (state, action) => {
      state.loading = false;
      state.exams = state.exams.map(exam =>
        exam.id === action.payload.id ? action.payload : exam,
      );
    },
    updateExamFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setExamStart,
  setExamSuccess,
  setExamFailure,
  getExamStart,
  getExamSuccess,
  getExamFailure,
  deleteExamStart,
  deleteExamSuccess,
  deleteExamFailure,
  updateExamStart,
  updateExamSuccess,
  updateExamFailure,
} = examSlice.actions;

export default examSlice.reducer;
