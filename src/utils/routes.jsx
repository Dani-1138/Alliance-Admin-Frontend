// import CourseComponent from '../app/components/CourseComponent';
import ExamDetailCard from '../app/components/AdminExamDetail';
import NewsForm from '../app/components/AdminNewsForm';
import CourseControlForm from '../app/components/CourseForm';
import AdminDashboard from '../app/components/Dashboard';
import DemoForm from '../app/components/DemoForm';
import DragDropFiles from '../app/components/DragDrop';
import ExamDetailForm from '../app/components/ExamDetailForm';
import Quiz from '../app/components/ExamDisplayComponent';
import ExamListComponent from '../app/components/ExamListComponent';
// import ExamForm from '../app/components/Exam';
import SignUp from '../app/components/SignUp';
import CourseUpdateForm from '../app/components/UpdateCourse';
import ExamDetailUpdate from '../app/components/UpdateExamDetail';
import NewsUpdateForm from '../app/components/UpdateNews';
import UpdateQuestionForm from '../app/components/UpdateQuestions';
// import ViewUsers from '../app/components/UserTable';
// import ViewUsers from '../app/components/UserTable';
import AdminCoursePage from '../app/pages/AdminCoursePage/AdminCoursePage';
import AdminExamDetailPage from '../app/pages/AdminExamDetailPage/AdminExamDetail';
import AdminExamPage from '../app/pages/AdminExamPage/AdminExamPage';
import AdminNewsPage from '../app/pages/AdminNewsPage/AdminNewsPage';
import AdminNotificationPage from '../app/pages/AdminNotificationPage/AdminNotificationPage';

export const routes = [
  {
    element: <AdminDashboard />,
    exact: true,
    path: '/admin/dashboard',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminCoursePage />,
    exact: true,
    path: '/admin/course',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <DemoForm />,
    exact: true,
    path: '/admin/course-add',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <DragDropFiles />,
    exact: true,
    path: '/admin/file',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <SignUp />,
    exact: true,
    path: '/admin/signup',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <CourseControlForm />,
    exact: true,
    path: '/admin/form',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminExamPage />,
    exact: true,
    path: '/admin/exam',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <Quiz />,
    exact: true,
    path: '/admin/quiz',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminExamDetailPage />,
    exact: true,
    path: '/admin/exam-card',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <ExamDetailCard />,
    exact: true,
    path: '/admin/exam-detail-card',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <ExamDetailForm />,
    exact: true,
    path: '/admin/exam-detail-form',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <ExamDetailUpdate />,
    exact: true,
    path: '/admin/exam-detail-update',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <ExamListComponent />,
    exact: true,
    path: '/admin/exam-list/:id',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <UpdateQuestionForm />,
    exact: true,
    path: '/admin/update-question',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <CourseUpdateForm />,
    exact: true,
    path: '/admin/update-couse',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminNotificationPage />,
    exact: true,
    path: '/admin/notify',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <AdminNewsPage />,
    exact: true,
    path: '/admin/news',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <NewsUpdateForm />,
    exact: true,
    path: '/admin/update-news',
    isProtected: true,
    allowedRole: 'admin',
  },
  {
    element: <NewsForm />,
    exact: true,
    path: '/admin/add-news',
    isProtected: true,
    allowedRole: 'admin',
  },
  // {
  //   element: <ViewUsers />,
  //   exact: true,
  //   path: '/admin/users',
  //   isProtected: true,
  //   allowedRole: 'admin',
  // },
];
