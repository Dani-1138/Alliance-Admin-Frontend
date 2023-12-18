import { useRef, useState } from 'react';
import { WrapperContainer } from './CourseForm';
import Input from '../ui/input';
import { useDispatch } from 'react-redux';
import { setExamDetailStart } from '../pages/AdminExamDetailPage/slice';
import {
  // getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../../firebase';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const ExamDetailForm = () => {
  const [file, setFile] = useState();
  const [examData, setExamData] = useState({
    image_url: '',
    title: '',
    description: '',
    time_seconds: 0,
  });

  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setExamData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUploadExam = event => {
    event.preventDefault();
    dispatch(setExamDetailStart(examData));
    console.log(examData);
  };

  const handleDragOver = event => {
    event.preventDefault();
    setFile(event.dataTransfer.files);
    console.log('Drag', file);
  };

  const handleDrop = event => {
    event.preventDefault();
    console.log('Drop', file);
  };

  const deleteImageObject = songURL => {
    setExamData(prevData => ({
      ...prevData,
      image_url: null,
    }));
    const deleteRef = ref(storage, songURL);
    deleteObject(deleteRef).then(() => {
      console.log('successfully deleted');
    });
  };
  const uploadImage = e => {
    const imageFile = e.target.files[0];
    const storageRef = ref(
      storage,
      `question_paper_images/${Date.now()}-${imageFile.name}`,
    );
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      snapshot => {
        // setUploadProgress(
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        // );
        console.log(
          'In progresss...',
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
      },

      error => {
        console.log('errorororororo in uploading', error);
        // setIsModal(true);
        // setModalContent('Something Wrong Please Try again');
        // setModalType('remove');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
          setExamData(prevData => ({
            ...prevData,
            image_url: downloadUrl,
          }));
          setFile(downloadUrl);
          // setIsModal(true);
          console.log('Image Uploaded Successfully');
          // setModalType('add');
          // setTimeout(() => {
          //   setAlert(null);
          // }, 4000);
        });
      },
    );
  };
  return (
    <WrapperContainer>
      <div className="card" style={{ width: '80%', margin: 'auto' }}>
        <div className="card-header">
          <h4>
            Add Exam Description
            {/* <a to="/view-student" className="btn btn-danger float-end">
                      Back
                    </a> */}
          </h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleUploadExam}>
            <div
              className="row ml-1"
              style={{ justifyContent: 'space-around' }}
            >
              <Input
                label="Title"
                type="text"
                name="title"
                onChange={handleInputChange}
              />
              <Input
                label="Exam Description"
                type="text"
                name="description"
                onChange={handleInputChange}
              />
              <Input
                label="Time"
                type="number"
                name="time_seconds"
                onChange={handleInputChange}
              />
            </div>
            <div
              className="row mb-3"
              style={{ justifyContent: 'space-around', marginTop: '50px' }}
            >
              <div
                className="dropzone w-50 h-50"
                style={{ marginLeft: '6%' }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <h4>Drag and Drop image to Upload</h4>
                <h4>Or</h4>
                <input
                  type="file"
                  multiple
                  onChange={uploadImage}
                  hidden
                  accept="image/png, image/jpeg"
                  ref={inputRef}
                />
                <button onClick={() => inputRef.current.click()}>
                  Select Files
                </button>
              </div>
              {examData.image_url && (
                <div style={{ position: 'relative' }}>
                  <img
                    src={examData.image_url}
                    style={{ height: '225px', width: '300px' }}
                  />
                  <Delete
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '10px',
                      color: 'red',
                      height: '50px',
                      width: '50px',
                    }}
                    onClick={deleteImageObject}
                  />
                </div>
              )}
            </div>
            <div>
              <Link
                to={{
                  pathname: '/admin/exam',
                  search: `?title=${encodeURIComponent(examData.title)}`,
                }}
              >
                <button type="submit" className="btn btn-primary">
                  Upload Exam & Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ExamDetailForm;
