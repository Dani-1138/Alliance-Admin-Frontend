/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../pages/AdminCoursePage/slice';
import { setNewsStatus } from '../pages/AdminNewsPage/slice';
import { useNavigate } from 'react-router-dom';
import { setNotificationStatus } from '../pages/AdminNotificationPage/slice';
import { setExamStatus } from '../pages/AdminExamPage/slice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ResponseModal({ open, type }) {
  const examStatus = useSelector(state => state.exam.status);
  const status = useSelector(state => state.course.status);
  const newsStatus = useSelector(state => state.news.status);
  const notificationStatus = useSelector(state => state.notification.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleModal = () => {
    if (type == 'news') {
      dispatch(setNewsStatus(''));
      navigate('/admin/news');
    }
    if (type == 'course') {
      dispatch(setStatus(''));
      // navigate('/admin/course');
    }
    if (type == 'notification') {
      dispatch(setNotificationStatus(''));
      // navigate('/admin/notification');
    }
    if (type == 'exam') {
      dispatch(setExamStatus(''));
      // navigate('/admin/notification');
    }

    // handleClose();
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {type == 'news' && newsStatus}
            {type == 'course' && status}
            {type == 'notification' && notificationStatus}
            {type == 'exam' && examStatus}
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {/* <button onClick={handleClose}>Cancel</button> */}
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'end' }}
          >
            <button
              type="button"
              className="btn btn-success"
              // onClick={handleOpen(data.id)}
              onClick={handleModal}
            >
              Ok
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
