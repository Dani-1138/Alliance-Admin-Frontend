/* eslint-disable react/prop-types */
import Dashboard from './app/components/AdminDashboardComponent';
import { Navigate, Route, Routes } from 'react-router-dom';

import { v4 as uuid } from 'uuid';
import './styles/fonts.css';
// import { useAllowedRole } from 'utils/hook/useAllowedRole';
import React from 'react';
import PageNotFound from './app/components/PageNotFound';
import { routes } from './utils/routes';
import SignIn from './app/components/Login';
import { GlobalStyle } from './styles/GlobalStyle';
// import localStorage from 'localStorage';

const ProtectedRoute = props => {
  // eslint-disable-next-line react/prop-types
  // useAllowedRole({ allowedRole: props.allowedRole });
  return <>{props.children}</>;
};
function App() {
  const storedAuthToken = localStorage.getItem('isAuthenticate');
  return (
    <>
      {/* <Dashboard /> */}

      <React.Fragment>
        <GlobalStyle />
        <Routes>
          <Route element={<Navigate replace={true} to="/login" />} path="/" />
          <Route element={<SignIn />} path="/login" />
        </Routes>
        {storedAuthToken && (
          // <div style={{ display: 'flex' }}>
          // <SideBar />
          <Dashboard>
            <Routes>
              {routes.map(route => (
                <React.Fragment key={uuid()}>
                  {route.isProtected ? (
                    <Route
                      element={
                        <ProtectedRoute allowedRole={route.allowedRole}>
                          {route.element}
                        </ProtectedRoute>
                      }
                      path={route.path}
                    />
                  ) : (
                    <Route element={route.element} path={route.path} />
                  )}
                </React.Fragment>
              ))}
              <Route element={<PageNotFound />} path="*" />
            </Routes>
          </Dashboard>
          // </div>
        )}
      </React.Fragment>
    </>
  );
}

export default App;
