import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setExamStart } from '../pages/AdminExamPage/slice';
import { setAnswerStart } from '../pages/AdminExamPage/answerSlice';
// import axios from 'axios';

const ExamForm = () => {
  const dispatch = useDispatch();
  const [questionData, setQuestionData] = useState({
    question: '',
    options: {
      idd: 'AAA',
      A: '',
      B: '',
      C: '',
      D: '',
    },
    correctAnswer: '',
    videoUrl: '',
    explanation: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name.includes('option')) {
      const optionName = name.slice(-1);
      setQuestionData(prevData => ({
        ...prevData,
        options: {
          ...prevData.options,
          [optionName]: value,
        },
      }));
    } else {
      setQuestionData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(questionData);
    const answer = {
      answer: questionData.options,
    };
    const question = {
      id: 'ppr001q006',
      correct_answer: questionData.correctAnswer,
      explanation: questionData.explanation,
      question: questionData.question,
      video_url: questionData.videoUrl,
      answer,
    };
    dispatch(setExamStart(question));
    // dispatch(setAnswerStart(answer));
    // console.log(data);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="row" style={{ width: '100%', margin: 'auto' }}>
          <div
            className="col-md-12"
            style={{
              width: '100%',
              margin: 'auto',
            }}
          >
            <div className="card" style={{ width: '100%', margin: 'auto' }}>
              <div
                className="card-header row"
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h4>Add Exam Question</h4>
                <Link
                  to="/admin/course"
                  className="btn btn-danger float-end"
                  style={{ width: '10rem' }}
                >
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Question</label>
                    <input
                      type="text"
                      name="question"
                      className="form-control"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="row">
                    <div
                      className="mb-3"
                      style={{ paddingLeft: '3rem', width: '50%' }}
                    >
                      <label>Option A</label>
                      <input
                        type="text"
                        name="optionA"
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div
                      className="mb-3"
                      style={{ paddingLeft: '3rem', width: '50%' }}
                    >
                      <label>Option B</label>
                      <input
                        type="text"
                        name="optionB"
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="mb-3"
                      style={{ paddingLeft: '3rem', width: '50%' }}
                    >
                      <label>Option C</label>
                      <input
                        type="text"
                        name="optionC"
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div
                      className="mb-3"
                      style={{ paddingLeft: '3rem', width: '50%' }}
                    >
                      <label>Option D</label>
                      <input
                        type="text"
                        name="optionD"
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="mb-3"
                      style={{ paddingLeft: '3rem', width: '50%' }}
                    >
                      <label>Correct Answer</label>
                      <br />
                      <input
                        type="text"
                        name="correctAnswer"
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div
                      className="mb-3"
                      style={{ paddingLeft: '3rem', width: '50%' }}
                    >
                      <label>Video URL</label>
                      <br />
                      <input
                        type="text"
                        name="videoUrl"
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="mb-3"
                      style={{ paddingLeft: '3rem', width: '100%' }}
                    >
                      <div className="form-group">
                        <label>Explanation</label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          onChange={handleInputChange}
                          name="explanation"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button type="submit" className="btn btn-primary">
                      Save Question
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </WrapperContainer> */}
    </>
  );
};

export default ExamForm;
