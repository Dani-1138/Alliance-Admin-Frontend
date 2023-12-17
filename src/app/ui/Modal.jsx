/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCourseStart,
  setDeletedId,
} from '../pages/AdminCoursePage/slice';
import { deleteNewsStart } from '../pages/AdminNewsPage/slice';

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

export default function BasicModal({ open, handleClose, type }) {
  const id = useSelector(state => state.course.deletedId);
  const newsId = useSelector(state => state.news.deletedId);
  const dispatch = useDispatch();
  const handleCourseDelete = () => {
    if (type == 'news') {
      dispatch(deleteNewsStart({ id: newsId }));
      handleClose();
    } else {
      console.log(id);
      dispatch(deleteCourseStart({ id }));
      handleClose();
    }
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete?
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <button onClick={handleClose}>Cancel</button>
          <button
            type="button"
            className="btn btn-danger"
            // onClick={handleOpen(data.id)}
            onClick={handleCourseDelete}
          >
            Delete
          </button>
        </Box>
      </Modal>
    </div>
  );
}
