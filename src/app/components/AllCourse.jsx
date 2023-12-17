/* eslint-disable react/prop-types */
import { useState } from 'react';
import BasicModal from '../ui/Modal';
import Card from '../ui/card';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const AllCourse = ({ button, data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container-fluid mt-4 w-100">
      <div
        className="d-sm-flex align-items-center justify-content-between mb-4"
        style={{ width: '100%' }}
      >
        <h1 className="h3 mb-0 text-gray-800">Courses</h1>
        {button && (
          <a
            href="/admin/course-add"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            style={{
              width: '170px',
              height: '40px',
              fontSize: '20px',
            }}
          >
            Add Course
          </a>
        )}
      </div>
      <div
        className="row d-flex ml-4 position-relative"
        style={{
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        {data &&
          data?.map(datas => (
            <div key={datas.id} className={'ml-5 mb-3'}>
              <Card data={datas} handleOpen={handleOpen} />
            </div>
          ))}
        {open && (
          <BasicModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        )}
        <ArrowForwardIosIcon
          className="shadow"
          style={{
            width: '80px',
            height: '80px',
            position: 'absolute',
            right: '-40px',
            top: '40%',
            backgroundColor: '#fff',
            borderRadius: '50%',
            color: 'whitesmoke',
          }}
        />
      </div>
    </div>
  );
};

export default AllCourse;
