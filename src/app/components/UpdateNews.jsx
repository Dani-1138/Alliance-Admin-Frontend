import { useEffect, useRef, useState } from 'react';
import { WrapperContainer } from './CourseForm';
import { useDispatch, useSelector } from 'react-redux';
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
import {
  getSingleNewsStart,
  updateNewsStart,
} from '../pages/AdminNewsPage/slice';
import BasicDatePicker from '../ui/DatePicker';
const NewsUpdateForm = () => {
  const updatedNews = useSelector(state => state.news.news);
  const status = useSelector(state => state.news.status);
  const [file, setFile] = useState();
  // eslint-disable-next-line no-unused-vars
  const [uploadProgress, setUploadProgress] = useState(0);
  const [newsData, setNewsData] = useState({
    imageUrl: '',
    details: '',
    time: '',
    title: '',
    category: '',
  });
  const inputRefImage = useRef();
  const dispatch = useDispatch();
  //   useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const news =
    updatedNews.length > 0 && updatedNews.filter(news => news.id == id);

  //   }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewsData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    dispatch(getSingleNewsStart({ id }));

    if (news.length > 0) {
      const { imageUrl, details, time, title, category } = news[0];

      setNewsData({
        imageUrl,
        details,
        time,
        title,
        category,
      });
      console.log(details, time, title, imageUrl);
    }
  }, []);

  const handleUploadCourse = event => {
    event.preventDefault();
    dispatch(updateNewsStart({ id, newsData }));
    console.log(newsData);
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
    setNewsData(prevData => ({
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
          setNewsData(prevData => ({
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

  return (
    <WrapperContainer>
      <div className="card" style={{ width: '80%', margin: 'auto' }}>
        <div className="card-header">
          <h4>
            Add News
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
                label="News title"
                type="text"
                name="title"
                value={newsData.title}
                onChange={handleInputChange}
              />
              <CustomInput
                label="Category"
                type="text"
                name="category"
                value={newsData.category}
                onChange={handleInputChange}
              />
              <textarea
                label="News Detail"
                type="text"
                name="details"
                value={newsData.details}
                onChange={handleInputChange}
                className="form-control ml-3"
                id="exampleFormControlTextarea1"
                rows="5"
                style={{ width: 500, marginLeft: 50 }}
              />
              <BasicDatePicker />
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
              {newsData.imageUrl && (
                <div style={{ position: 'relative' }}>
                  <img
                    src={newsData.imageUrl}
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
                onClick={handleUploadCourse}
              >
                Update News
              </button>
            </div>
          </form>
        </div>
        {status && <ResponseModal type="news" />}
      </div>
    </WrapperContainer>
  );
};

export default NewsUpdateForm;
