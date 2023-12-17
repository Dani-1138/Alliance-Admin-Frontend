// import React from 'react';
import { useState } from 'react';
import '../../styles/Dashboard.css';
import { theme } from '../../styles/theme';
const SideBar = () => {
  const [style, setStyle] = useState(
    'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion',
  );

  const changeStyle = () => {
    if (
      style == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    ) {
      setStyle(
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled',
      );
    } else {
      setStyle('navbar-nav bg-gradient-primary sidebar sidebar-dark accordion');
    }
  };
  return (
    <>
      <ul
        className={style}
        id="accordionSidebar"
        style={{ background: theme.colors.gradient[0] }}
      >
        {/*  <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-kCtN1aPEYmR3hlwghTxifyU7ezPSJmTNXHJR7kBDw&s"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
          </div>
          <div className="sidebar-brand-text mx-2">Alliance</div>
          <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
              onClick={changeStyle}
            ></button>
          </div>
        </a>

        {/*   <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/*  <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <a className="nav-link" href="/admin/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/*  <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/*   <!-- Heading --> */}
        {/* <div className="sidebar-heading">Interface</div> */}

        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Courses</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Custom Components:</h6> */}
              <a className="collapse-item" href="/admin/course-add">
                Add Course
              </a>
              <a className="collapse-item" href="/admin/course">
                Active Courses
              </a>{' '}
              <a className="collapse-item" href="/admin/course">
                Not-Active Courses
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Notifications</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Notifications:</h6>
              <a className="collapse-item" href="/admin/notify">
                Add notification
              </a>
              <a className="collapse-item" href="utilities-border.html">
                All notifications
              </a>
              {/* <a className="collapse-item" href="utilities-animation.html">
                    Animations
                  </a>
                  <a className="collapse-item" href="utilities-other.html">
                    Other
                  </a> */}
            </div>
          </div>
        </li>

        {/*  <!-- Divider --> */}
        {/* <hr className="sidebar-divider" /> */}

        {/* <!-- Heading --> */}
        {/* <div className="sidebar-heading">Addons</div> */}

        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Exams</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Exam Actions:</h6>
              <a className="collapse-item" href="/admin/exam-card">
                National Exams
              </a>
              <a className="collapse-item" href="/admin/exam">
                Add Exam
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <a className="nav-link" href="/admin/news">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>News</span>
          </a>
        </li>

        {/*  <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <a className="nav-link" href="/admin/users">
            <i className="fas fa-fw fa-people"></i>
            <span>Users</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/*   <!-- Sidebar Toggler (Sidebar) --> */}
        {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}
      </ul>
    </>
  );
};

export default SideBar;
