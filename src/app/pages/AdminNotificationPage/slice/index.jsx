import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  deletedId: '',
  status: '',
  loading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotificationStart: (state, action) => {
      state.notifications = action.payload;
    },
    setNotificationSuccess: (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
      state.status = action.payload.data.msg;
    },
    setNotificationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // getCoursesStart: state => {
    //   console.log('acctiknflsd');
    //   state.loading = true;
    //   state.error = null;
    // },
    // getCoursesSuccess: (state, action) => {
    //   state.loading = false;
    //   state.courses = action.payload;
    // },
    // getCoursesFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // deleteCourseStart: state => {
    //   console.log('deleteing ');
    //   state.loading = true;
    //   state.error = null;
    // },
    // getSingleCoursesStart: state => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // getSingleCoursesSuccess: (state, action) => {
    //   state.loading = false;
    //   state.courses = action.payload;
    // },
    // getSingleCoursesFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // deleteCourseSuccess: (state, action) => {
    //   state.loading = false;
    //   state.courses = state.courses.filter(
    //     course => course.id !== action.payload,
    //   );
    //   state.status = 'success';
    // },
    // deleteCourseFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // updateCourseStart: state => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // updateCourseSuccess: (state, action) => {
    //   state.loading = false;
    //   state.courses = state.courses.map(course =>
    //     course.id === action.payload.id ? action.payload : course,
    //   );
    //   state.status = 'success';
    // },
    // updateCourseFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // setDeletedId: (state, action) => {
    //   state.deletedId = action.payload;
    // },
    // clearDeletedId: state => {
    //   state.deletedId = '';
    // },
    setNotificationStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {
  setNotificationStart,
  setNotificationSuccess,
  setNotificationFailure,
  setNotificationStatus,
  // getCoursesStart,
  // setDeletedId,
  // clearDeletedId,
  // getCoursesSuccess,
  // getCoursesFailure,
  // getSingleCoursesStart,
  // getSingleCoursesSuccess,
  // getSingleCoursesFailure,
  // deleteCourseStart,
  // deleteCourseSuccess,
  // deleteCourseFailure,
  // updateCourseStart,
  // updateCourseSuccess,
  // updateCourseFailure,
  // setStatus,
} = notificationSlice.actions;

export default notificationSlice.reducer;
