import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { setNotificationFailure, setNotificationSuccess } from '.';
import { apiBaseUrl } from '../../../../utils/constants';
// const fetchNotification = async () => {
//   const response = await fetch('http://localhost:5000/api/course/');
//   return response.json();
// };
// const fetchSingleCourses = async id => {
//   const response = await fetch(`http://localhost:5000/api/course/${id}`);
//   return response.json();
// };

// const deleteCourse = async id => {
//   const response = await fetch(
//     `http://localhost:5000/api/course/delete/${id}`,
//     {
//       method: 'DELETE',
//     },
//   );
//   return response.json();
// };

// const updateCourse = async (id, courseData) => {
//   const response = await fetch(
//     `http://localhost:5000/api/course/update/${id}`,
//     {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(courseData),
//     },
//   );
//   return response.json();
// };

// function* getCoursesSaga() {
//   try {
//     const courses = yield call(fetchCourses);
//     yield put(getCoursesSuccess(courses));
//   } catch (error) {
//     yield put(getCoursesFailure(error.message));
//   }
// }
// function* getSigleCoursesSaga(action) {
//   const { id } = action.payload;
//   try {
//     const courses = yield call(fetchSingleCourses(id));
//     yield put(getSingleCoursesSuccess(courses));
//   } catch (error) {
//     yield put(getCoursesFailure(error.message));
//   }
// }

// function* deleteCourseSaga(action) {
//   try {
//     const { id } = action.payload;
//     yield call(deleteCourse, id);
//     yield put(deleteCourseSuccess(id));
//   } catch (error) {
//     yield put(deleteCourseFailure(error.message));
//   }
// }

// function* updateCourseSaga(action) {
//   console.log(action.payload);
//   console.log(action.payload);
//   try {
//     const { id, courseData } = action.payload;
//     console.log(courseData);
//     console.log(id);
//     const updatedCourse = yield call(updateCourse, id, courseData);
//     yield put(updateCourseSuccess(updatedCourse));
//   } catch (error) {
//     yield put(updateCourseFailure(error.message));
//   }
// }

function* setNotification(action) {
  console.log(action.payload);
  try {
    const notification = yield call(() =>
      axios.post(`${apiBaseUrl}/course/send-notification`, action.payload),
    );
    yield put(setNotificationSuccess(notification));
  } catch (error) {
    yield put(setNotificationFailure(error));
  }
}

function* notificationSaga() {
  // yield takeLatest('course/getSingleCoursesStart', getSigleCoursesSaga);
  // yield takeLatest('course/getCoursesStart', getCoursesSaga);
  // yield takeLatest('course/deleteCourseStart', deleteCourseSaga);
  // yield takeLatest('course/updateCourseStart', updateCourseSaga);
  yield takeLatest('notification/setNotificationStart', setNotification);
}

export default notificationSaga;
