import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exams: [],
  examStatus: '',
  deletedId: '',
  loading: false,
  error: null,
};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setExamStart: (state, action) => {
      state.exams = action.payload;
      state.loading = true;
    },
    setExamSuccess: (state, action) => {
      state.loading = false;
      state.exams = action.payload;
      state.examStatus = action.payload.msg;
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
    setExamStatus: (state, action) => {
      state.examStatus = action.payload;
    },
    setDeletedId: (state, action) => {
      state.deletedId = action.payload.id;
      console.log(state.deletedId);
    },
    clearDeletedId: state => {
      state.deletedId = '';
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
  setExamStatus,
  setDeletedId,
  clearDeletedId,
} = examSlice.actions;

export default examSlice.reducer;
