/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { PrimaryButton } from '../ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const ExamDetailCard = ({ exam }) => {
  const navigate = useNavigate();
  return (
    <CardContainer className="shadow">
      <PhotoContainer
        imageUrl={exam.image_url}
        onClick={() => navigate(`/admin/exam-list/${exam.id}`)}
      />
      <CardContent onClick={() => navigate(`/admin/exam-list/${exam.id}`)}>
        <H5>{exam.title}</H5>
        <h6>{exam.description}</h6>
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
        <H6>Number of questions: {exam.questions_count}</H6>
        <H6>Exam Duration: {exam.time_seconds}</H6>
        <Link
          to={{
            pathname: '/admin/exam-detail-update',
            search: `?image_url=${encodeURIComponent(
              exam.image_url,
            )}&title=${encodeURIComponent(
              exam.title,
            )}&description=${encodeURIComponent(
              exam.description,
            )}&time_seconds=${encodeURIComponent(
              exam.time_seconds,
            )}&id=${encodeURIComponent(exam.id)}`,
          }}
          style={{ zIndex: 100 }}
        >
          <PrimaryButton marginBottom={'10px'} float={'right'}>
            Edit
          </PrimaryButton>
        </Link>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled('div')`
  height: 220px;
  width: 45%;
  background-color: white;
  display: flex;
  /* box-shadow: 2px 2px 6px 6px rgb(248, 248, 248); */
  position: relative;
  margin: 1rem;
  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s ease;
    opacity: 0.8;
  }
`;
const PhotoContainer = styled('div')`
  height: 180px;
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: cover;
`;
const CardContent = styled('div')`
  height: 200px;
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

export default ExamDetailCard;
