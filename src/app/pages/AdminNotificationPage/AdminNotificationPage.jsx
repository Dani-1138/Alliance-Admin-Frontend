import { useDispatch, useSelector } from 'react-redux';
// import { selectCourses } from './slice/selector';
// import { getCoursesStart } from './slice/index';
import { useEffect } from 'react';
import Notification from '../../components/Notification';
const AdminNotificationPage = () => {
  const courses = useSelector(state => state.course.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getCoursesStart());
    console.log(courses);
    console.log(courses);
  }, []);

  return (
    <>
      <Notification />
    </>
  );
};

export default AdminNotificationPage;
