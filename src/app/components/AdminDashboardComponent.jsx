/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../../styles/Dashboard.css';
import { theme } from '../../styles/theme';
import SideBar from './SideBar';
// import AdminDashboard from './Dashboard';

function Dashboard({ children }) {
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
    <div style={{ position: 'relative', overflowY: 'scroll' }}>
      <body id="page-top" style={{ width: '100vw' }}>
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper" style={{ width: '100%' }}>
          {/*  <!-- Sidebar --> */}
          {/* <SideBar /> */}
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          {/* <AdminDashboard /> */}
          {children}

          {/*  <!-- End of Content Wrapper --> */}
        </div>
        {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Selectbelow if you are ready to end your current session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
