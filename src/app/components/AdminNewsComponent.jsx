/* eslint-disable react/prop-types */
import { useState } from 'react';
import BasicModal from '../ui/Modal';
import NewsDisplay from './NewsDisplay';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const AllCourse = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container-fluid mt-4 w-100">
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
        className="d-sm-flex align-items-center justify-content-between mb-4"
        style={{ width: '100%' }}
      >
        <h1 className="h3 mb-0 text-gray-800">News</h1>
        <a
          href="/admin/add-news"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          style={{
            width: '170px',
            height: '40px',
            fontSize: '20px',
          }}
        >
          Add News
        </a>
      </div>
      <div
        className="d-flex row position-relative"
        style={{
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        {data &&
          data?.map(datas => (
            <div key={datas.id} className={'mb-3 w-50'}>
              <NewsDisplay data={datas} handleOpen={handleOpen} />
            </div>
          ))}
        {open && (
          <BasicModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            type={'news'}
          />
        )}
        {/* <ArrowForwardIosIcon
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
        /> */}
      </div>
    </div>
  );
};

export default AllCourse;
