import { takeLatest, call, put } from 'redux-saga/effects';
import {
  deleteExamDetailFailure,
  deleteExamDetailStart,
  deleteExamDetailSuccess,
  getExamDetailFailure,
  getExamDetailSuccess,
  setExamDetailFailure,
  setExamDetailSuccess,
  updateExamDetailFailure,
  updateExamDetailSuccess,
} from './index';
import axios from 'axios';
import { apiBaseUrl } from '../../../../utils/constants';

const fetchExamDetail = async () => {
  const response = await fetch(`${apiBaseUrl}/exam/`);
  return response.json();
};

const deleteExamDetail = async id => {
  const response = await fetch(`${apiBaseUrl}/exam/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

const updateExamDetail = async (id, examData) => {
  const response = await fetch(`${apiBaseUrl}/exam/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(examData),
  });
  return response.json();
};

function* getExamDetailSaga() {
  try {
    // yield put(getCoursesStart());
    const exams = yield call(fetchExamDetail);

    yield put(getExamDetailSuccess(exams));
  } catch (error) {
    yield put(getExamDetailFailure(error.message));
  }
}

function* deleteExamDetailSaga(action) {
  try {
    const { id } = action.payload;
    yield put(deleteExamDetailStart());
    yield call(deleteExamDetail, id);
    yield put(deleteExamDetailSuccess(id));
  } catch (error) {
    yield put(deleteExamDetailFailure(error.message));
  }
}

function* updateExamDetailSaga(action) {
  try {
    const { id, examData } = action.payload;
    console.log(id, examData);
    const updatedCourse = yield call(updateExamDetail, id, examData);
    yield put(updateExamDetailSuccess(updatedCourse));
  } catch (error) {
    yield put(updateExamDetailFailure(error.message));
  }
}

function* setExamDetail(action) {
  try {
    const post = yield call(() =>
      axios.post(`${apiBaseUrl}/exam/create`, action.payload),
    );
    yield put(setExamDetailSuccess(post));
  } catch (error) {
    yield put(setExamDetailFailure(error));
  }
}

function* ExamDetailSaga() {
  yield takeLatest('examDetail/getExamDetailStart', getExamDetailSaga);
  yield takeLatest('examDetail/deleteExamDetailStart', deleteExamDetailSaga);
  yield takeLatest('examDetail/updateExamDetailStart', updateExamDetailSaga);
  yield takeLatest('examDetail/setExamDetailStart', setExamDetail);
}

export default ExamDetailSaga;
