import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [],
  loading: false,
  error: null,
};

const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswerStart: (state, action) => {
      state.answers = action.payload;
    },
    setAnswerSuccess: (state, action) => {
      state.loading = false;
      state.answers = action.payload[0].data;
    },
    setAnswerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAnswerStart: state => {
      state.loading = true;
      state.error = null;
    },
    getAnswerSuccess: (state, action) => {
      state.loading = false;
      state.answers = action.payload;
    },
    getAnswerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteAnswerStart: state => {
      state.loading = true;
      state.error = null;
    },
    deleteAnswerSuccess: (state, action) => {
      state.loading = false;
      state.answers = state.answers.filter(
        answer => answer.id !== action.payload,
      );
    },
    deleteAnswerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateAnswerStart: state => {
      state.loading = true;
      state.error = null;
    },
    updateAnswerSuccess: (state, action) => {
      state.loading = false;
      state.answers = state.answers.map(answer =>
        answer.id === action.payload.id ? action.payload : answer,
      );
    },
    updateAnswerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setAnswerStart,
  setAnswerSuccess,
  setAnswerFailure,
  getAnswerStart,
  getAnswerSuccess,
  getAnswerFailure,
  deleteAnswerStart,
  deleteAnswerSuccess,
  deleteAnswerFailure,
  updateAnswerStart,
  updateAnswerSuccess,
  updateAnswerFailure,
} = answerSlice.actions;

export default answerSlice.reducer;
