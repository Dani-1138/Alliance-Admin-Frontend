import { useEffect, useRef, useState } from 'react';
import { WrapperContainer } from './CourseForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSingleCoursesStart,
  updateCourseStart,
} from '../pages/AdminCoursePage/slice';
import {
  // getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../../firebase';
import { Delete } from '@mui/icons-material';
import CustomInput from '../ui/DefaultInput';
import ResponseModal from '../ui/ResponseModal';
const CourseUpdateForm = () => {
  const updateCourse = useSelector(state => state.course.courses);
  const status = useSelector(state => state.course.status);
  const [file, setFile] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [courseData, setCourseData] = useState({
    imageUrl: '',
    courseOwner: '',
    courseAmount: '',
    courseStatus: 0,
    courseDuration: '',
    recommendedFor: '',
    courseType: '',
    videoUrl: '',
  });
  const inputRefVideo = useRef();
  const inputRefImage = useRef();
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  //   useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const course = updateCourse.filter(course => course.id == id);
  //   }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCourseData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(status);
  useEffect(() => {
    dispatch(getSingleCoursesStart({ id }));
    console.log(course);
    const {
      courseAmount,
      videoUrl,
      courseDuration,
      courseStatus,
      courseOwner,
      recommendedFor,
      imageUrl,
      courseType,
    } = course[0];
    if (course) {
      setCourseData({
        courseAmount,
        videoUrl,
        courseDuration,
        courseStatus,
        courseOwner,
        recommendedFor,
        imageUrl,
        courseType,
      });
      console.log(courseAmount, videoUrl, courseDuration, courseStatus);
    }
  }, []);

  const handleUploadCourse = event => {
    event.preventDefault();
    dispatch(updateCourseStart({ id, courseData }));
  };
  const handleDragOver = event => {
    event.preventDefault();
    setFile(event.dataTransfer.files);
    // setFile(URL.createObjectURL(event.target.files[0]));
    console.log('Drag', file);
  };

  const handleDrop = event => {
    event.preventDefault();
    // setFile(URL.createObjectURL(event.target.files[0]));
    console.log('Drop', file);
  };

  const deleteImageObject = songURL => {
    setCourseData(prevData => ({
      ...prevData,
      imageUrl: null,
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
        setUploadProgress(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
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
          setCourseData(prevData => ({
            ...prevData,
            imageUrl: downloadUrl,
          }));
          setFile(downloadUrl);
          setUploadProgress(0);
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

  const uploadVideo = e => {
    const videoFile = e.target.files[0];
    const storageRef = ref(storage, `Videos/${Date.now()}-${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('In progress...', progress);
        setUploadProgress(progress);
      },
      error => {
        console.log('Error uploading', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(downloadUrl => {
            console.log('Video uploaded successfully');
            setCourseData(prevData => ({
              ...prevData,
              videoUrl: downloadUrl,
            }));
            setFile(downloadUrl);
            setUploadProgress(0);
          })
          .catch(error => {
            console.log('Error retrieving download URL', error);
          });
      },
    );
  };
  const deleteVideoObject = videoURL => {
    setCourseData(prevData => ({
      ...prevData,
      videoUrl: null,
    }));
    const deleteRef = ref(storage, videoURL);
    deleteObject(deleteRef)
      .then(() => {
        console.log('Successfully deleted');
      })
      .catch(error => {
        console.log('Error deleting video:', error);
      });
  };
  return (
    <WrapperContainer>
      <div className="card" style={{ width: '80%', margin: 'auto' }}>
        <div className="card-header">
          <h4>
            Add Course
            {/* <a to="/view-student" className="btn btn-danger float-end">
                      Back
                    </a> */}
          </h4>
        </div>
        <div className="card-body">
          <form>
            <div
              className="row ml-1"
              style={{ justifyContent: 'space-around' }}
            >
              <CustomInput
                label="Course title"
                type="text"
                name="courseType"
                value={courseData.courseType}
                onChange={handleInputChange}
              />
              <CustomInput
                label="Course Owner"
                type="text"
                name="courseOwner"
                value={courseData.courseOwner}
                onChange={handleInputChange}
              />
              <CustomInput
                label="course duration"
                type="text"
                name="courseDuration"
                value={courseData.courseDuration}
                onChange={handleInputChange}
              />
            </div>
            <div
              className="row ml-1"
              style={{ justifyContent: 'space-around' }}
            >
              <CustomInput
                label="Recommended for"
                type="text"
                name="recommendedFor"
                value={courseData.recommendedFor}
                onChange={handleInputChange}
              />
              <CustomInput
                label="Course amount"
                type="text"
                name="courseAmount"
                value={courseData.courseAmount}
                onChange={handleInputChange}
              />
              <CustomInput
                label="Course rate"
                type="number"
                name="courseStatus"
                value={courseData.courseStatus}
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
                  ref={inputRefImage}
                />
                <button onClick={() => inputRefImage.current.click()}>
                  Select Image
                </button>
              </div>
              {courseData.imageUrl && (
                <div style={{ position: 'relative' }}>
                  <img
                    src={courseData.imageUrl}
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
            <div
              className="row mb-3"
              style={{ justifyContent: 'space-around', marginTop: '50px' }}
            >
              <div
                className="dropzone w-50 h-50"
                style={{ marginLeft: '19%' }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <h4>Drag and Drop Video to Upload</h4>
                <h4>Or</h4>
                <input
                  type="file"
                  multiple
                  onChange={uploadVideo}
                  hidden
                  accept="video/*"
                  ref={inputRefVideo}
                />
                <button onClick={() => inputRefVideo.current.click()}>
                  Select video
                </button>
              </div>
              {courseData.videoUrl ? (
                <div
                  style={{
                    width: '300px',
                    height: '300px',
                    position: 'relative',
                  }}
                >
                  <video
                    ref={videoRef}
                    width={'300px'}
                    height={'200px'}
                    src={courseData.videoUrl}
                    controls
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
                    onClick={deleteVideoObject}
                  />
                </div>
              ) : (
                <h1>{parseInt(uploadProgress)}%</h1>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUploadCourse}
              >
                Update Course
              </button>
            </div>
          </form>
        </div>
        {status && <ResponseModal type="course" />}
      </div>
    </WrapperContainer>
  );
};

export default CourseUpdateForm;
