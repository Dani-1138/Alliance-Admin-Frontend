import { all } from 'redux-saga/effects';
import courseSaga from './app/pages/AdminCoursePage/slice/saga';
import examSaga from './app/pages/AdminExamPage/slice/saga';
import answerSaga from './app/pages/AdminExamPage/answerSlice/saga';
import ExamDetailSaga from './app/pages/AdminExamDetailPage/slice/saga';
import newsSaga from './app/pages/AdminNewsPage/slice/saga';
import notificationSaga from './app/pages/AdminNotificationPage/slice/saga';
// Import your other individual sagas

export function* rootSaga() {
  yield all([
    examSaga(),
    courseSaga(),
    answerSaga(),
    ExamDetailSaga(),
    newsSaga(),
    notificationSaga(),
    // Add your other individual sagas here
  ]);
}
