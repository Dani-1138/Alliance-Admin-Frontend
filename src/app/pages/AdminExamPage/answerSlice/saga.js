import { takeLatest, call, put } from 'redux-saga/effects';
import {
  deleteAnswerFailure,
  deleteAnswerStart,
  deleteAnswerSuccess,
  getAnswerFailure,
  getAnswerSuccess,
  setAnswerFailure,
  setAnswerSuccess,
  updateAnswerFailure,
  updateAnswerStart,
  updateAnswerSuccess,
} from './index';
import axios from 'axios';
import { apiBaseUrl } from '../../../../utils/constants';

// API functions for fetching, deleting, and updating courses

const fetchAnswer = async (examId, id) => {
  console.log('saga....');
  const response = await fetch(`${apiBaseUrl}/answer/${examId}/${id}`);
  return response.json();
};

const deleteAnswer = async id => {
  const response = await fetch(`${apiBaseUrl}/answer/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

const updateAnswer = async (id, data) => {
  const response = await fetch(`${apiBaseUrl}/answer/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

function* getAnswerSaga(action) {
  const { examId, id } = action.payload;
  try {
    // yield put(getCoursesStart());
    const courses = yield call(fetchAnswer, examId, id);
    yield put(getAnswerSuccess(courses));
  } catch (error) {
    yield put(getAnswerFailure(error.message));
  }
}

function* deleteAnswerSaga(action) {
  try {
    const { id } = action.payload;
    yield put(deleteAnswerStart());
    yield call(deleteAnswer, id);
    yield put(deleteAnswerSuccess(id));
  } catch (error) {
    yield put(deleteAnswerFailure(error.message));
  }
}

function* updateAnswerSaga(action) {
  try {
    const { id, data } = action.payload;
    yield put(updateAnswerStart());
    const updatedCourse = yield call(updateAnswer, id, data);
    yield put(updateAnswerSuccess(updatedCourse));
  } catch (error) {
    yield put(updateAnswerFailure(error.message));
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

function* setAnswer(action) {
  try {
    const post = yield call(() =>
      axios.post(`${apiBaseUrl}/answer/create`, action.payload),
    );
    yield put(setAnswerSuccess(post));
  } catch (error) {
    yield put(setAnswerFailure(error));
  }
}

function* answerSaga() {
  yield takeLatest('answer/getAnswerStart', getAnswerSaga);
  yield takeLatest('answer/deleteAnswerStart', deleteAnswerSaga);
  yield takeLatest('answer/updateAnswerStart', updateAnswerSaga);
  yield takeLatest('answer/setAnswerStart', setAnswer);
}

export default answerSaga;
