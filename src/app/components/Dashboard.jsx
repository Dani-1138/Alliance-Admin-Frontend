import { useState } from 'react';
import '../../styles/Dashboard.css';
import DoughnutChart from '../ui/Doughnut';
import BarChart from '../ui/BarGraph';

const AdminDashboard = () => {
  const [style, setStyle] = useState(
    'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion',
  );
  const changeStyle1 = () => {
    if (
      style == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    ) {
      setStyle(
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1',
      );
    } else {
      setStyle('navbar-nav bg-gradient-primary sidebar sidebar-dark accordion');
    }
  };
  return (
    <div
      id="content-wrapper"
      className="d-flex flex-column overflow-x-hidden"
      style={{ overflowX: 'hidden' }}
    >
      {/*  <!-- Main Content --> */}
      <div id="content">
        {/*  <!-- Topbar --> */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/*  <!-- Sidebar Toggle (Topbar) --> */}
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={changeStyle1}
          >
            <i className="fa fa-bars"></i>
          </button>

          {/*  <!-- Topbar Search --> */}
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
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

          {/*  <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">
            {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-search fa-fw"></i>
              </a>
              {/*   <!-- Dropdown - Messages --> */}
              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
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
            </li>

            {/*  <!-- Nav Item - Alerts --> */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw"></i>
                {/*  <!-- Counter - Alerts --> */}
                <span className="badge badge-danger badge-counter">3+</span>
              </a>
              {/*   <!-- Dropdown - Alerts --> */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Alerts Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 2, 2019</div>
                    Spending Alert: noticed unusually high spending for your
                    account.
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Alerts
                </a>
              </div>
            </li>

            {/*  <!-- Nav Item - Messages --> */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-envelope fa-fw"></i>
                {/*  <!-- Counter - Messages --> */}
                <span className="badge badge-danger badge-counter">7</span>
              </a>
              {/*   <!-- Dropdown - Messages --> */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header">Message Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_1.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      ve been having.
                    </div>
                    <div className="small text-gray-500">
                      Emily Fowler · 58m
                    </div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_2.svg"
                      alt="..."
                    />
                    <div className="status-indicator"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div className="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="img/undraw_profile_3.svg"
                      alt="..."
                    />
                    <div className="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      Last month report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div className="small text-gray-500">
                      Morgan Alvarez · 2d
                    </div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren
                      good...
                    </div>
                    <div className="small text-gray-500">
                      Chicken the Dog · 2w
                    </div>
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>
              </div>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            {/* <!-- Nav Item - User Information --> */}
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Douglas McGee
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="img/undraw_profile.svg"
                />
              </a>
              {/*  <!-- Dropdown - User Information --> */}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/*  <!-- End of Topbar --> */}

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/*  <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a
              href="#"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Generate
              Report
            </a>
          </div>

          {/*  <!-- Content Row --> */}
          <div className="row">
            {/*  <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Earnings (Monthly)
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        $40,000
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Earnings (Annual)
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        $215,000
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <!-- Earnings (Monthly) Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Tasks
                      </div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                            50%
                          </div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div
                              className="progress-bar bg-info a1"
                              role="progressbar"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <!-- Pending Requests Card Example --> */}
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Requests
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        18
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <!-- Content Row --> */}

          <div className="row">
            {/*   <!-- Area Chart --> */}
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                {/*  <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Course Status
                  </h6>
                  <div className="dropdown no-arrow">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <div className="dropdown-header">Status</div>
                      <a className="dropdown-item" href="#">
                        Student
                      </a>
                      <a className="dropdown-item" href="#">
                        Course
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Default
                      </a>
                    </div>
                  </div>
                </div>
                {/*  <!-- Card Body --> */}
                <div className="card-body">
                  {/* <div className="chart-area"> */}
                  <BarChart />
                  {/* </div> */}
                </div>
              </div>
            </div>

            {/*  <!-- Pie Chart --> */}
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                {/*  <!-- Card Header - Dropdown --> */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Active Batchs status
                  </h6>
                  <div className="dropdown no-arrow">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <div className="dropdown-header">Select status</div>
                      <a className="dropdown-item" href="#">
                        Batch
                      </a>
                      <a className="dropdown-item" href="#">
                        Course
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        Default
                      </a>
                    </div>
                  </div>
                </div>
                {/*  <!-- Card Body --> */}
                <div className="card-body">
                  {/* <div className="chart-pie pt-4 pb-2">
                          <canvas id="myPieChart"></canvas>
                        </div>
                        <div className="mt-4 text-center small">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary"></i>{' '}
                            Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success"></i>{' '}
                            Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info"></i> Referral
                          </span>
                        </div> */}
                </div>
                <DoughnutChart />
              </div>
            </div>
          </div>

          {/*   <!-- Content Row --> */}
          <div className="row">
            {/*   <!-- Content Column --> */}
            <div className="col-lg-6 mb-4">
              {/* <!-- Project Card Example --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Courses</h6>
                </div>
                <div className="card-body">
                  <h4 className="small font-weight-bold">
                    Fundemental of cloud computing{' '}
                    <span className="float-right">20%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar bg-danger a2"
                      role="progressbar"
                    ></div>
                  </div>
                  <h4 className="small font-weight-bold">
                    Data structure and algorithm{' '}
                    <span className="float-right">40%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar bg-warning a3"
                      role="progressbar"
                    ></div>
                  </div>
                  <h4 className="small font-weight-bold">
                    Fundamental of Python programming{' '}
                    <span className="float-right">60%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div className="progress-bar a7" role="progressbar"></div>
                  </div>
                  <h4 className="small font-weight-bold">
                    Big data <span className="float-right">80%</span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar bg-info a4"
                      role="progressbar"
                    ></div>
                  </div>
                  <h4 className="small font-weight-bold">
                    Machine learning{' '}
                    <span className="float-right">Complete!</span>
                  </h4>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success a5"
                      role="progressbar"
                    ></div>
                  </div>
                </div>
              </div>

              {/* <!-- Color System --> */}
            </div>

            <div className="col-lg-6 mb-4">
              {/* <!-- Illustrations --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Illustrations
                  </h6>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                      src="img/undraw_posting_photo.svg"
                      alt="..."
                    />
                  </div>
                  <p>
                    Add some quality, svg illustrations to your project courtesy
                    of{' '}
                    <a
                      target="_blank"
                      rel="nofollow noreferrer"
                      href="https://undraw.co/"
                    >
                      unDraw
                    </a>
                    , a constantly updated collection of beautiful svg images
                    that you can use completely free and without attribution!
                  </p>
                  <a
                    target="_blank"
                    rel="nofollow noreferrer"
                    href="https://undraw.co/"
                  >
                    Browse Illustrations on unDraw &rarr;
                  </a>
                </div>
              </div>

              {/* <!-- Approach --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Development Approach
                  </h6>
                </div>
                <div className="card-body">
                  <p>
                    SB Admin 2 makes extensive use of Bootstrap 4 utility
                    classNamees in order to reduce CSS bloat and poor page
                    performance. Custom CSS classNamees are used to create
                    custom components and custom utility classNamees.
                  </p>
                  <p className="mb-0">
                    Before working with this theme, you should become familiar
                    with the Bootstrap framework, especially the utility
                    classNamees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*   <!-- /.container-fluid --> */}
      </div>
      {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
      <footer className="sticky-footer bg-white h-10">
        {/* <div className="container my-auto"> */}
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2021</span>
        </div>
        {/* </div> */}
      </footer>
      {/* <!-- End of Footer --> */}
    </div>
  );
};

export default AdminDashboard;
