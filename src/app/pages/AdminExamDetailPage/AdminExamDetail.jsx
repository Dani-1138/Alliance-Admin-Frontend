import { useDispatch, useSelector } from 'react-redux';
// import { selectCourses } from './slice/selector';
import { getExamDetailStart } from './slice/index';
import { useEffect } from 'react';
import AdminExamCard from '../../components/AdminExamCard';
// import { selectExamDetail } from './slice/selector';
const AdminExamDetailPage = () => {
  //   const exams = useSelector(selectExamDetail);
  const exams = useSelector(state => state.examDetail.examDetails);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExamDetailStart());
    console.log(exams);
  }, []);

  // dispatch(deleteCourse(courseId));
  // dispatch(updateCourse(courseId, updatedData));

  return (
    <>
      <AdminExamCard data={exams} />
    </>
  );
};

export default AdminExamDetailPage;
