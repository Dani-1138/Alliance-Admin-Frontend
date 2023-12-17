/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDeletedId } from '../pages/AdminCoursePage/slice';

const Card = ({ data, handleOpen }) => {
  const dispatch = useDispatch();
  const handleOpenDelete = id => {
    // handleOpen();
    dispatch(setDeletedId(id));
    handleOpen();
  };
  return (
    <CardContainer className="shadow">
      <PhotoContainer imageUrl={data?.imageUrl} />
      <CardContent>
        <H5>{data?.courseType}</H5>
        <h6>{data?.courseOwner}</h6>
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name="text-feedback"
            value={data?.courseStatus}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{data?.courseStatus}</Box>
        </Box>
        <H6>{data?.courseAmount}</H6>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
          <button
            type="button"
            className="btn btn-danger"
            // onClick={handleCourseDelete(data.id)}
            onClick={() => handleOpenDelete(data?.id)}
          >
            Delete
          </button>

          <Link
            to={{
              pathname: '/admin/update-couse',
              search: `?id=${encodeURIComponent(data.id)}`,
            }}
          >
            <button type="button" className="btn btn-primary">
              Edit
            </button>
          </Link>
        </div>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled('div')`
  height: 420px;
  width: 300px;
  background-color: white;
  /* box-shadow: 2px 2px 6px 6px rgb(248, 248, 248); */
  position: relative;
  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s ease;
    opacity: 0.8;
  }
`;
const PhotoContainer = styled('div')`
  height: 200px;
  width: 300px;
  background-image: ${props => `url(${props.imageUrl})`};
  /* background-image: url('https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg'); */
  background-size: cover;
  background-position: cover;
`;
const CardContent = styled('div')`
  height: 200px;
  width: 300px;
  padding: 10px;
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: 'start';
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

export default Card;
