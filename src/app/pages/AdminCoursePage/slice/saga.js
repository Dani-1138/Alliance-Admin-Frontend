import { takeLatest, call, put } from 'redux-saga/effects';
import {
  // getCoursesStart,
  getCoursesSuccess,
  getCoursesFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
  updateCourseSuccess,
  updateCourseFailure,
  // setCourseStart,
  setCoursesSuccess,
  setCoursesFailure,
  getSingleCoursesSuccess,
} from './index';
import axios from 'axios';
import { apiBaseUrl } from '../../../../utils/constants';

// API functions for fetching, deleting, and updating courses
// const apiBaseUrl = process.env.API_URL;
const fetchCourses = async () => {
  const response = await fetch(`${apiBaseUrl}/course/`);
  return response.json();
};
const fetchSingleCourses = async id => {
  const response = await fetch(`${apiBaseUrl}/course/${id}`);
  return response.json();
};

const deleteCourse = async id => {
  const response = await fetch(`${apiBaseUrl}/course/delete/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

const updateCourse = async (id, courseData) => {
  const response = await fetch(`${apiBaseUrl}/course/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(courseData),
  });
  return response.json();
};

function* getCoursesSaga() {
  try {
    // yield put(getCoursesStart());
    const courses = yield call(fetchCourses);
    yield put(getCoursesSuccess(courses));
  } catch (error) {
    yield put(getCoursesFailure(error.message));
  }
}
function* getSigleCoursesSaga(action) {
  const { id } = action.payload;
  try {
    // yield put(getCoursesStart());
    const courses = yield call(fetchSingleCourses(id));
    yield put(getSingleCoursesSuccess(courses));
  } catch (error) {
    yield put(getCoursesFailure(error.message));
  }
}

function* deleteCourseSaga(action) {
  try {
    const { id } = action.payload;
    yield call(deleteCourse, id);
    yield put(deleteCourseSuccess(id));
  } catch (error) {
    yield put(deleteCourseFailure(error.message));
  }
}

function* updateCourseSaga(action) {
  console.log(action.payload);
  console.log(action.payload);
  try {
    const { id, courseData } = action.payload;
    console.log(courseData);
    console.log(id);
    const updatedCourse = yield call(updateCourse, id, courseData);
    yield put(updateCourseSuccess(updatedCourse));
  } catch (error) {
    yield put(updateCourseFailure(error.message));
  }
}

// function* setCourseSaga(action) {
//   try {
//     const { data } = action.payload;
//     yield put(setCourseStart());
//     const setCourse = yield call(setCourse, data);
//     yield put(setCoursesSuccess(setCourse));
//   } catch (error) {
//     yield put(setCoursesFailure(error.message));
//   }
// }

function* setCourse(action) {
  try {
    const res = yield call(() =>
      axios.post(`${apiBaseUrl}/course/create`, action.payload),
    );
    yield put(setCoursesSuccess(res));
  } catch (error) {
    yield put(setCoursesFailure(error));
  }
}

function* courseSaga() {
  yield takeLatest('course/getSingleCoursesStart', getSigleCoursesSaga);
  yield takeLatest('course/getCoursesStart', getCoursesSaga);
  yield takeLatest('course/deleteCourseStart', deleteCourseSaga);
  yield takeLatest('course/updateCourseStart', updateCourseSaga);
  yield takeLatest('course/setCourseStart', setCourse);
}

export default courseSaga;
