import { useState, useEffect } from 'react';
import '../../styles/quize.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerStart } from '../pages/AdminExamPage/answerSlice';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const answers = useSelector(state => state.answer.answers);
  // const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const [alert, setAlert] = useState(false);

  const correct_answer = queryParams.get('correct_answer');
  const explanation = queryParams.get('explanation');
  const id = queryParams.get('id');
  const examId = queryParams.get('examId');
  const question = queryParams.get('question');
  const video = queryParams.get('video');

  console.log(examId, id);
  useEffect(() => {
    console.log(examId, id);
    dispatch(getAnswerStart({ examId, id }));
    console.log(answers);
    console.log(answers);
  }, [examId, id]);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 8000);
  }, [alert]);

  const choices = answers.map(answer => answer.Answer);
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (index == 0) {
      answer = 'A';
    } else if (index == 1) {
      answer = 'B';
    } else if (index == 2) {
      answer = 'C';
    } else if (index == 3) {
      answer = 'D';
    }
    if (answer === correct_answer) {
      setSelectedAnswer('correct');
      console.log('Correct...');
    } else {
      setSelectedAnswer('wrong');
      console.log('wrong...');
    }
  };

  const handleSubmit = () => {
    setAlert(true);
  };

  // const addLeadingZero = number => (number > 9 ? number : `0${number}`);

  return (
    <div className="container d-flex quize">
      <div style={{ flexDirection: 'column' }}>
        {/* {!showResult && <CountdownTimer />} */}
        <div className="quiz-container bg-white shadow">
          {alert ? (
            selectedAnswer == 'correct' ? (
              <Alert variant={'success'}>Correct Answer very nice!!!</Alert>
            ) : (
              <Alert variant={'danger'}>Wrong Answer Please try again</Alert>
            )
          ) : (
            <div></div>
          )}
          {!showResult && question?.length > 0 && (
            <div>
              <h2>{question}</h2>
              <ul>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={
                      selectedAnswerIndex === index ? 'selected-answer' : null
                    }
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex-right exam-btn">
                <button style={{ marginLeft: '20px' }} onClick={handleSubmit}>
                  Ckeck
                </button>
                <Link
                  to={{
                    pathname: '/admin/update-question',
                    search: `?correct_answer=${encodeURIComponent(
                      correct_answer,
                    )}&explanation=${encodeURIComponent(
                      explanation,
                    )}&id=${encodeURIComponent(
                      id,
                    )}&question=${encodeURIComponent(
                      question,
                    )}&examId=${encodeURIComponent(
                      examId,
                    )}&video=${encodeURIComponent(
                      video,
                    )}&A=${encodeURIComponent(
                      answers && answers[0]?.Answer,
                    )}&B=${encodeURIComponent(
                      answers && answers[1]?.Answer,
                    )}&C=${encodeURIComponent(
                      answers && answers[2]?.Answer,
                    )}&D=${encodeURIComponent(answers && answers[3]?.Answer)}`,
                  }}
                >
                  <button style={{ marginLeft: '20px' }}>Edit</button>
                </Link>
              </div>
            </div>
          )}
        </div>{' '}
      </div>
    </div>
  );
};

export default Quiz;
