import CourseComponent from '../../components/CourseComponent';
import { useDispatch, useSelector } from 'react-redux';
// import { selectCourses } from './slice/selector';
import { getCoursesStart } from './slice/index';
import { useEffect } from 'react';
const AdminCoursePage = () => {
  // const courses = useSelector(selectCourses);
  const courses = useSelector(state => state.course.courses);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesStart());
    console.log(courses);
    console.log(courses);
  }, []);

  // dispatch(deleteCourse(courseId));
  // dispatch(updateCourse(courseId, updatedData));

  return (
    <>
      <CourseComponent data={courses} />
    </>
  );
};

export default AdminCoursePage;
