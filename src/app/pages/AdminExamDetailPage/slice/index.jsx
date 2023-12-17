import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  examDetails: [],
  loading: false,
  error: null,
};

const examDetailSlice = createSlice({
  name: 'examDetail',
  initialState,
  reducers: {
    setExamDetailStart: (state, action) => {
      state.examDetails = action.payload;
    },
    setExamDetailSuccess: (state, action) => {
      state.loading = false;
      state.examDetails = action.payload;
    },
    setExamDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getExamDetailStart: state => {
      state.loading = true;
      state.error = null;
    },
    getExamDetailSuccess: (state, action) => {
      state.loading = false;
      state.examDetails = action.payload;
    },
    getExamDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteExamDetailStart: state => {
      state.loading = true;
      state.error = null;
    },
    deleteExamDetailSuccess: (state, action) => {
      state.loading = false;
      state.examDetails = state.examDetails.filter(
        exam => exam.id !== action.payload,
      );
    },
    deleteExamDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateExamDetailStart: state => {
      state.loading = true;
      state.error = null;
    },
    updateExamDetailSuccess: (state, action) => {
      state.loading = false;
      state.examDetails = state.examDetails.map(exam =>
        exam.id === action.payload.id ? action.payload : exam,
      );
    },
    updateExamDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setExamDetailStart,
  setExamDetailSuccess,
  setExamDetailFailure,
  getExamDetailStart,
  getExamDetailSuccess,
  getExamDetailFailure,
  deleteExamDetailStart,
  deleteExamDetailSuccess,
  deleteExamDetailFailure,
  updateExamDetailStart,
  updateExamDetailSuccess,
  updateExamDetailFailure,
} = examDetailSlice.actions;

export default examDetailSlice.reducer;
