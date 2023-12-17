/* eslint-disable react/prop-types */
import ExamDetailCard from './AdminExamDetail';
import { WrapperContainer } from './CourseForm';
import { PrimaryButton } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const arr = [1, 2, 3, 4];

const AdminExamCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <WrapperContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignContent: 'start',
        }}
      >
        <h1 className="h3 mb-5 text-gray-800">National Exams</h1>
        <div>
          <PrimaryButton
            marginRight={'25px'}
            onClick={() => navigate('/admin/exam-detail-form')}
          >
            Add new Exam
          </PrimaryButton>
        </div>
      </div>

      <div className="row">
        {arr.map(ar => (
          <div className="col-xl-3 col-md-6 mb-4" key={ar}>
            <div
              className="card shadow h-100 py-2"
              // style={{ backgroundColor: 'rgb(248, 248, 248)' }}
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      National Eaxm
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      201{ar}
                    </div>
                  </div>
                  {/* <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
        {data?.map(exam => (
          <ExamDetailCard key={exam} exam={exam} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default AdminExamCard;
