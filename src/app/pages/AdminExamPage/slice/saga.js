import { takeLatest, call, put } from 'redux-saga/effects';
import {
  getExamSuccess,
  getExamFailure,
  deleteExamFailure,
  deleteExamStart,
  deleteExamSuccess,
  updateExamSuccess,
  updateExamFailure,
  setExamSuccess,
  setExamFailure,
} from './index';
import axios from 'axios';
import { apiBaseUrl } from '../../../../utils/constants';

const fetchExam = async id => {
  const response = await fetch(`${apiBaseUrl}/question/${id}`);
  return response.json();
};

const deleteExam = async id => {
  const response = await fetch(`${apiBaseUrl}/question/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

const updateExam = async (examId, id, data) => {
  const response = await fetch(
    `${apiBaseUrl}/question/update/${examId}/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  return response.json();
};

function* getExamSaga(action) {
  const { id } = action.payload;
  try {
    // yield put(getCoursesStart());
    const exams = yield call(fetchExam, id);
    yield put(getExamSuccess(exams));
  } catch (error) {
    yield put(getExamFailure(error.message));
  }
}

function* deleteExamSaga(action) {
  try {
    const { id } = action.payload;
    yield put(deleteExamStart());
    yield call(deleteExam, id);
    yield put(deleteExamSuccess(id));
  } catch (error) {
    yield put(deleteExamFailure(error.message));
  }
}

function* updateExamSaga(action) {
  try {
    console.log(action.payload);
    const { id, question, examId } = action.payload;
    const updatedCourse = yield call(updateExam, examId, id, question);
    yield put(updateExamSuccess(updatedCourse));
  } catch (error) {
    yield put(updateExamFailure(error.message));
  }
}

function* setExam(action) {
  try {
    const post = yield call(() =>
      axios.post(`${apiBaseUrl}/question/create`, action.payload),
    );
    yield put(setExamSuccess(post));
  } catch (error) {
    yield put(setExamFailure(error));
  }
}

function* examSaga() {
  yield takeLatest('exam/getExamStart', getExamSaga);
  yield takeLatest('exam/deleteExamStart', deleteExamSaga);
  yield takeLatest('exam/updateExamStart', updateExamSaga);
  yield takeLatest('exam/setExamStart', setExam);
}

export default examSaga;
