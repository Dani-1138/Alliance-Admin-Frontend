import { useDispatch, useSelector } from 'react-redux';
// import { selectCourses } from './slice/selector';
import { getNewsStart } from './slice/index';
import { useEffect } from 'react';
import AdminNewsComponent from '../../components/AdminNewsComponent';
const AdminNewsPage = () => {
  // const courses = useSelector(selectCourses);
  const news = useSelector(state => state.news.news);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsStart());
    console.log(news);
    console.log(news);
  }, []);

  // dispatch(deleteCourse(courseId));
  // dispatch(updateCourse(courseId, updatedData));

  return (
    <>
      <AdminNewsComponent data={news} />
    </>
  );
};

export default AdminNewsPage;
