import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  singleNews: [],
  deletedId: '',
  status: '',
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsStart: (state, action) => {
      state.news = action.payload;
    },
    setNewsSuccess: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.news = action.payload;
      state.status = action.payload.msg;
    },
    setNewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getNewsStart: state => {
      state.loading = true;
      state.error = null;
    },
    getNewsSuccess: (state, action) => {
      state.loading = false;
      state.news = action.payload;
    },
    getNewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteNewsStart: state => {
      state.loading = true;
      state.error = null;
    },
    getSingleNewsStart: (state, action) => {
      console.log(action.payload);
      state.loading = true;
      state.error = null;
      // state.singleNews = state.news.filter(
      //   course => course.id == action.payload.id,
      // );
    },
    getSingleNewsSuccess: (state, action) => {
      state.loading = false;
      state.singleNews = action.payload;
      // state.singleNews = state.news.filter(
      //   course => course.id == action.payload.id,
      // );
    },
    getSingleNewsFailure: (state, action) => {
      state.loading = false;
      state.error = state.news.filter(course => course.id == action.payload);
    },
    deleteNewsSuccess: (state, action) => {
      state.loading = false;
      state.news = state.news.filter(course => course.id !== action.payload);
      state.status = action.payload.msg;
    },
    deleteNewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateNewsStart: (state, action) => {
      console.log(action.payload);
      state.loading = true;
      state.error = null;
    },
    updateNewsSuccess: (state, action) => {
      state.loading = false;
      state.news = state.news.map(course =>
        course.id === action.payload.id ? action.payload : course,
      );
      state.status = action.payload.msg;
    },
    updateNewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setDeletedId: (state, action) => {
      state.deletedId = action.payload;
    },
    clearDeletedId: state => {
      state.deletedId = '';
    },
    setNewsStatus: (state, action) => {
      state.status = action.payload.msg;
    },
  },
});

export const {
  setNewsStart,
  setNewsSuccess,
  setNewsFailure,
  getNewsStart,
  setDeletedId,
  clearDeletedId,
  getNewsSuccess,
  getNewsFailure,
  getSingleNewsStart,
  getSingleNewsSuccess,
  getSingleNewsFailure,
  deleteNewsStart,
  deleteNewsSuccess,
  deleteNewsFailure,
  updateNewsStart,
  updateNewsSuccess,
  updateNewsFailure,
  setNewsStatus,
} = newsSlice.actions;

export default newsSlice.reducer;
