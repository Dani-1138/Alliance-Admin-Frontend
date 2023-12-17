import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import course from '../src/app/pages/AdminCoursePage/slice/index.jsx';
import examDetail from '../src/app/pages/AdminExamDetailPage/slice/index.jsx';
import answer from '../src/app/pages/AdminExamPage/answerSlice/index.js';
import exam from '../src/app/pages/AdminExamPage/slice/index.js';
import news from '../src/app/pages/AdminNewsPage/slice/index.jsx';
import { rootSaga } from './rootSaga.js';
import notification from '../src/app/pages/AdminNotificationPage/slice/index.jsx';
import auth from './LoginState.js';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { course, exam, answer, examDetail, news, notification, auth },
  middleware: [saga],
});
saga.run(rootSaga);
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
