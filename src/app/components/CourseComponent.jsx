/* eslint-disable react/prop-types */
import AllCourse from './AllCourse';
const CourseComponent = ({ data }) => {
  return (
    <div className="w-100">
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

      <AllCourse button={true} data={data} />
      {/* <AllCourse button={false} />
      <AllCourse button={false} /> */}
    </div>
  );
};

export default CourseComponent;
