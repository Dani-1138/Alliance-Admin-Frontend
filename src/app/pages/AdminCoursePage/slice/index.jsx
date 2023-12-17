import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  deletedId: '',
  status: '',
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseStart: (state, action) => {
      state.courses = action.payload;
    },
    setCoursesSuccess: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.courses = action.payload;
      state.status = action.payload.data.msg;
    },
    setCoursesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCoursesStart: state => {
      state.loading = true;
      state.error = null;
    },
    getCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    getCoursesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCourseStart: state => {
      state.loading = true;
      state.error = null;
    },
    getSingleCoursesStart: state => {
      state.loading = true;
      state.error = null;
    },
    getSingleCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    getSingleCoursesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.courses = state.courses.filter(
        course => course.id !== action.payload,
      );
      state.status = action.payload.msg;
    },
    deleteCourseFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCourseStart: state => {
      state.loading = true;
      state.error = null;
    },
    updateCourseSuccess: (state, action) => {
      state.loading = false;
      state.courses = state.courses.map(course =>
        course.id === action.payload.id ? action.payload : course,
      );
      state.status = action.payload.msg;
    },
    updateCourseFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setDeletedId: (state, action) => {
      state.deletedId = action.payload;
    },
    clearDeletedId: state => {
      state.deletedId = '';
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {
  setCourseStart,
  setCoursesSuccess,
  setCoursesFailure,
  getCoursesStart,
  setDeletedId,
  clearDeletedId,
  getCoursesSuccess,
  getCoursesFailure,
  getSingleCoursesStart,
  getSingleCoursesSuccess,
  getSingleCoursesFailure,
  deleteCourseStart,
  deleteCourseSuccess,
  deleteCourseFailure,
  updateCourseStart,
  updateCourseSuccess,
  updateCourseFailure,
  setStatus,
} = courseSlice.actions;

export default courseSlice.reducer;
