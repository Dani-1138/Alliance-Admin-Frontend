import { useEffect, useRef, useState } from 'react';
import { WrapperContainer } from './CourseForm';
import Input from '../ui/DefaultInput';
import { useDispatch } from 'react-redux';
import {
  // setExamDetailStart,
  updateExamDetailStart,
} from '../pages/AdminExamDetailPage/slice';
import {
  // getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../../firebase';
import { Delete } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
const ExamDetailUpdate = () => {
  const [file, setFile] = useState();
  const [examData, setExamData] = useState({
    image_url: '',
    title: '',
    description: '',
    time_seconds: 0,
  });
  const inputRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const image_url = queryParams.get('image_url');
  const title = queryParams.get('title');
  const description = queryParams.get('description');
  const time_seconds = queryParams.get('time_seconds');
  const id = queryParams.get('id');

  useEffect(() => {
    setExamData({
      image_url,
      title,
      description,
      time_seconds,
    });
  }, [image_url, title, description, time_seconds]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setExamData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatedExam = event => {
    event.preventDefault();
    dispatch(updateExamDetailStart({ id, examData }));
    console.log(id, examData);
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
        <div className="card-header d-flex justify-content-between">
          <h4>Add Exam Description</h4>
          <a to="/admin/exam-detail-card" className="btn btn-danger float-end">
            Back
          </a>
        </div>
        <div className="card-body">
          <form>
            <div
              className="row ml-1"
              style={{ justifyContent: 'space-around' }}
            >
              <Input
                label="Title"
                type="text"
                name="title"
                value={examData.title}
                onChange={handleInputChange}
              />
              <Input
                label="Exam Description"
                type="text"
                name="description"
                value={examData.description}
                onChange={handleInputChange}
              />
              <Input
                label="Time"
                type="number"
                name="time_seconds"
                value={examData.time_seconds}
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUpdatedExam}
              >
                Update Exam Detail
              </button>
            </div>
          </form>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ExamDetailUpdate;
