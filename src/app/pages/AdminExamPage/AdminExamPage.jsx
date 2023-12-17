import { useDispatch, useSelector } from 'react-redux';
import ExamForm from '../../components/Exam';
import { useEffect } from 'react';
import { getExamStart } from './slice';
import { getAnswerStart } from './answerSlice';

const AdminExamPage = () => {
  // const courses = useSelector(selectCourses);
  const exam = useSelector(state => state.exam.exams);
  const answers = useSelector(state => state.answer.answers);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExamStart());
    console.log(exam);
    console.log(exam);
  }, []);

  useEffect(() => {
    dispatch(getAnswerStart());
    console.log(answers);
    console.log(answers);
  }, []);
  return (
    <>
      <ExamForm />
    </>
  );
};

export default AdminExamPage;
