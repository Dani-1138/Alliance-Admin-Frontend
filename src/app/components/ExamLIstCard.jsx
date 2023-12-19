/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { setDeletedId } from '../pages/AdminExamPage/slice';
import { useDispatch } from 'react-redux';

const ExamListCard = ({ examList, index, examId, handleOpen }) => {
  const dispatch = useDispatch();
  const handleOpenDelete = id => {
    console.log(id);
    dispatch(setDeletedId({ id }));
    handleOpen();
  };
  return (
    <CardContainer className="shadow">
      {/* <PhotoContainer imageUrl={examList.image_url} /> */}
      <CardContent>
        <H5>
          {index + 1}. {examList.question}
        </H5>
        <h6>
          <span style={{ color: 'black' }}>exp:</span>{' '}
          {examList.explanation?.substring(0, 100)}...
        </h6>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* <Rating
            name="text-feedback"
            value="3.5"
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          /> */}
          {/* <Box sx={{ ml: 2 }}>3.5</Box> */}
        </Box>
        <H6>Correct Answer: {examList.correct_answer}</H6>
        {/* <H6>Exam Duration: {exam.time_seconds}</H6> */}

        {/* </Link> */}
      </CardContent>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <button
          type="button"
          className="btn btn-danger"
          // onClick={handleCourseDelete(data.id)}
          onClick={() => handleOpenDelete(examList?.id)}
        >
          Delete
        </button>
        <Link
          to={{
            pathname: '/admin/quiz',
            search: `?correct_answer=${encodeURIComponent(
              examList.correct_answer,
            )}&explanation=${encodeURIComponent(
              examList.explanation,
            )}&id=${encodeURIComponent(
              examList.id,
            )}&question=${encodeURIComponent(
              examList.question,
            )}&examId=${encodeURIComponent(examId)}&video=${encodeURIComponent(
              examList.video,
            )}`,
          }}
        >
          <Button style={{ width: '100px' }}>Preview</Button>
        </Link>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled('div')`
  height: auto;
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* box-shadow: 2px 2px 6px 6px rgb(248, 248, 248); */
  position: relative;
  margin: 2rem;
  margin-bottom: 4rem;
  padding: 0.3rem;
  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s ease;
    opacity: 0.8;
  }
`;
// const PhotoContainer = styled('div')`
//   height: 180px;
//   width: 300px;
//   margin: 10px;
//   border-radius: 10px;
//   background-image: ${props => `url(${props.imageUrl})`};
//   background-size: cover;
//   background-position: cover;
// `;
const CardContent = styled('div')`
  /* height: 200px; */
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const H5 = styled('h5')`
  margin-top: 5px;
  color: black;
  font-weight: 600;
`;
const H6 = styled('h5')`
  margin-top: 5px;
  color: black;
  font-weight: 500;
`;

export default ExamListCard;
