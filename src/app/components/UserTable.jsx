// import { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// import { Avatar, Skeleton, Stack } from '@mui/material';
// // import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';

// function SkeletonChildrenDemo() {
//   return (
//     <div>
//       <Stack sx={{ display: 'flex', alignItems: 'center' }}>
//         <Stack sx={{ margin: 1 }}>
//           <Skeleton variant="circular">
//             <Avatar />
//           </Skeleton>
//         </Stack>
//         <Stack sx={{ width: '100%' }}>
//           <Skeleton width="100%">
//             <Typography>.</Typography>
//           </Skeleton>
//         </Stack>
//       </Stack>
//       <Skeleton variant="rectangular" width="100%">
//         <div style={{ paddingTop: '57%' }} />
//       </Skeleton>
//     </div>
//   );
// }

// function ViewUsers() {
//   // if () {
//   //   return (
//   //     <Grid container spacing={8}>
//   //       <Grid item xs>
//   //         <SkeletonChildrenDemo />
//   //       </Grid>
//   //       <Grid item xs>
//   //         <SkeletonChildrenDemo />
//   //       </Grid>
//   //     </Grid>
//   //   );
//   // }
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div className="container ">
//       {/* {alert && (
//         <Stack sx={{ width: '100%' }} spacing={2}>
//           <Alert severity="success">
//             <AlertTitle>Success</AlertTitle>
//             Department Successfully Add
//           </Alert>
//         </Stack>
//       )} */}
//       <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
//         <div className="row ">
//           <div className="col-sm-3 mt-5 mb-4 text-gred">
//             <div className="search">
//               <form className="form-inline">
//                 <input
//                   className="form-control mr-sm-2"
//                   type="search"
//                   // onChange={e => setSearch(e.target.value)}
//                   placeholder="Search department"
//                   aria-label="Search"
//                 />
//               </form>
//             </div>
//           </div>
//           <div
//             className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
//             style={{ color: 'rgb(157, 199, 201)' }}
//           >
//             <h2>
//               <b>Users</b>
//             </h2>
//           </div>
//           <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
//             <Button variant="primary" onClick={handleShow}>
//               Add user
//             </Button>
//           </div>
//         </div>
//         <div className="row">
//           <div className="table-responsive ">
//             <table className="table table-striped table-hover table-bordered">
//               <thead>
//                 <tr>
//                   <th style={{ backgroundColor: 'rgb(157, 199, 201)' }}>#</th>
//                   <th style={{ backgroundColor: 'rgb(157, 199, 201)' }}>Id </th>
//                   <th style={{ backgroundColor: 'rgb(157, 199, 201)' }}>
//                     Name
//                   </th>
//                   <th style={{ backgroundColor: 'rgb(157, 199, 201)' }}>
//                     Email
//                   </th>
//                   <th style={{ backgroundColor: 'rgb(157, 199, 201)' }}>
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* {filteredDepartments &&
//                   filteredDepartments.map((dep, index) => ( */}
//                 <tr>
//                   <td>1</td>
//                   <td>1</td>
//                   <td>Daniel Demeke</td>
//                   <td>danieldemeke92@gmail.com</td>
//                   <td>
//                     <Link
//                       to={`/update-intake/`}
//                       href="#"
//                       class="edit"
//                       title="Edit"
//                       data-toggle="tooltip"
//                     >
//                       <i className="material-icons">&#xE254;</i>
//                     </Link>

//                     <a
//                       href="#"
//                       className="delete"
//                       title="Delete"
//                       data-toggle="tooltip"
//                       style={{ color: 'red' }}
//                     >
//                       <i
//                         className="material-icons"
//                         // onClick={() => showDeleteModal(dep.id)}
//                       >
//                         &#xE872;
//                       </i>
//                     </a>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* <!--- Model Box ---> */}
//         <div className="model_box">
//           <Modal
//             show={show}
//             onHide={handleClose}
//             backdrop="static"
//             keyboard={false}
//           >
//             <Modal.Header closeButton>
//               <Modal.Title>Add Record</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <form>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     // onChange={e => setDepartment(e.target.value)}
//                     aria-describedby="textHelp"
//                     placeholder="Enter Department"
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     // onChange={e => setIntake(e.target.value)}
//                     aria-describedby="emailHelp"
//                     placeholder="Enter Intake Capacity"
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     // onChange={e => setStatus(e.target.value)}
//                     aria-describedby="emailHelp"
//                     placeholder="Enter Student Satisfaction"
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-success mt-4">
//                   Add Department
//                 </button>
//               </form>
//             </Modal.Body>

//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           {/* Model Box Finsihs */}
//         </div>
//       </div>
//       {/* <DeleteConfirmation
//         showModal={displayConfirmationModal}
//         confirmModal={submitDelete}
//         hideModal={hideConfirmationModal}
//         id={deleteId}
//         message={'Are you sure you want to delete this student?'}
//       /> */}
//     </div>
//   );
// }

// export default ViewUsers;
