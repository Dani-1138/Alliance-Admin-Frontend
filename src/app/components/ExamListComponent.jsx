/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getExamStart } from '../pages/AdminExamPage/slice';
import ExamListCard from './ExamLIstCard';
import { PrimaryButton } from '../ui/Button';
import BasicModal from '../ui/Modal';

// import AllCourse from './AllCourse';
const ExamListComponent = () => {
  const examList = useSelector(state => state.exam.exams);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getExamStart({ id }));
    console.log(examList);
  }, []);

  return (
    <div>
      <div className=" p-3 " aria-labelledby="searchDropdown">
        <form className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small mt-3 ml-2"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignContent: 'start',
        }}
      >
        <h1 className="h3 mb-5 ml-4 text-gray-800">Exam list</h1>
        <div>
          <PrimaryButton
            marginRight={'250px'}
            // onClick={() => navigate('/admin/exam-detail-form')}
          >
            Preview All exam
          </PrimaryButton>
        </div>
        <div>
          <PrimaryButton
            marginRight={'25px'}
            onClick={() => navigate(`/admin/exam/${id}`)}
          >
            Add new Question
          </PrimaryButton>
        </div>
      </div>
      <div className="row" style={{ width: '100%' }}>
        {examList.map((exam, i) => (
          <ExamListCard
            examList={exam}
            index={i}
            key={i}
            examId={id}
            handleOpen={handleOpen}
          />
        ))}
      </div>
      {open && (
        <BasicModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          type="exam"
        />
      )}
      {/* <AllCourse button={true} data={data} />
      <AllCourse button={false} />
      <AllCourse button={false} /> */}
    </div>
  );
};

export default ExamListComponent;
