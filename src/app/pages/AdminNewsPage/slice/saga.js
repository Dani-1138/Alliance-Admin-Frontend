import { takeLatest, call, put } from 'redux-saga/effects';
import {
  deleteNewsFailure,
  deleteNewsSuccess,
  getNewsFailure,
  getNewsSuccess,
  getSingleNewsSuccess,
  setNewsFailure,
  setNewsSuccess,
  updateNewsFailure,
  updateNewsSuccess,
} from './index';
import axios from 'axios';
import { apiBaseUrl } from '../../../../utils/constants';

// API functions for fetching, deleting, and updating courses

const fetchNews = async () => {
  const response = await fetch(`${apiBaseUrl}/news/`);
  return response.json();
};
const fetchSingleNews = async id => {
  const response = await fetch(`${apiBaseUrl}/news/${id}`);
  return response.json();
};

const deleteNews = async id => {
  const response = await fetch(`${apiBaseUrl}/news/delete/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

const updateNews = async (id, newsData) => {
  const response = await fetch(`${apiBaseUrl}/news/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newsData),
  });
  return response.json();
};

function* getNewsSaga() {
  try {
    // yield put(getCoursesStart());
    const courses = yield call(fetchNews);
    yield put(getNewsSuccess(courses));
  } catch (error) {
    yield put(getNewsFailure(error.message));
  }
}
function* getSigleNewsSaga(action) {
  const { id } = action.payload;
  console.log(id);
  try {
    // yield put(getCoursesStart());
    // yield put(getSingleNewsSuccess(id));
    const courses = yield call(fetchSingleNews(id));
    yield put(getSingleNewsSuccess(courses));
  } catch (error) {
    yield put(getNewsFailure(error.message));
  }
}

function* deleteNewsSaga(action) {
  try {
    const { id } = action.payload;
    yield call(deleteNews, id);
    yield put(deleteNewsSuccess(id));
  } catch (error) {
    yield put(deleteNewsFailure(error.message));
  }
}

function* updateNewsSaga(action) {
  try {
    const { id, newsData } = action.payload;
    const updatedNews = yield call(updateNews, id, newsData);
    console.log('saga comp');
    yield put(updateNewsSuccess(updatedNews));
  } catch (error) {
    yield put(updateNewsFailure(error.message));
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

function* setNews(action) {
  try {
    const news = yield call(() =>
      axios.post(`${apiBaseUrl}/news/create`, action.payload),
    );
    console.log(news);
    yield put(setNewsSuccess(news.data));
  } catch (error) {
    yield put(setNewsFailure(error));
  }
}

function* newsSaga() {
  yield takeLatest('news/getSingleNewsStart', getSigleNewsSaga);
  yield takeLatest('news/getNewsStart', getNewsSaga);
  yield takeLatest('news/deleteNewsStart', deleteNewsSaga);
  yield takeLatest('news/updateNewsStart', updateNewsSaga);
  yield takeLatest('news/setNewsStart', setNews);
}

export default newsSaga;
