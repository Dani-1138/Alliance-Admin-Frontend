import { useRef, useState } from 'react';
import { WrapperContainer } from './CourseForm';
import { Delete } from '@mui/icons-material';
import {
  // getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../../firebase';
import MultipleSelect from '../ui/MultiSelector';
import RadioButton from '../ui/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationStart } from '../pages/AdminNotificationPage/slice';
import ResponseModal from '../ui/ResponseModal';
const Notification = () => {
  const [file, setFile] = useState();
  const status = useSelector(state => state.notification.status);
  // eslint-disable-next-line no-unused-vars
  const [uploadProgress, setUploadProgress] = useState(0);
  const [notification, setNotification] = useState({
    imageUrl: '',
    title: '',
    body: '',
  });
  const [radioValue, setRadioValue] = useState('all');
  const dispatch = useDispatch();
  const inputRefImage = useRef();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setNotification(prevNotification => ({
      ...prevNotification,
      [name]: value,
    }));
  };
  const handleRadioChange = event => {
    setRadioValue(event.target.value);
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
    setNotification(prevData => ({
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
          setNotification(prevData => ({
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

  const handleSendNotification = event => {
    event.preventDefault();
    dispatch(setNotificationStart({ notification }));
    console.log(status);
  };

  return (
    <WrapperContainer>
      <div className="form-group">
        <form onSubmit={handleSendNotification}>
          <div className="ml-3">
            <label>Notification title</label>
            <input
              type="text"
              className="form-control"
              style={{ width: 500 }}
              name="title"
              // placeholder="Notification title"
              value={notification.title}
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="exampleFormControlTextarea1" className="m-3">
            Notification detail
          </label>
          <textarea
            className="form-control ml-3"
            id="exampleFormControlTextarea1"
            rows="5"
            style={{ width: 500, marginLeft: 50 }}
            name="body"
            value={notification.body}
            onChange={handleInputChange}
          />

          <div
            className="row mb-3 w-50"
            style={{ justifyContent: 'space-around', marginTop: '50px' }}
          >
            <div
              className="dropzone w-50 h-50"
              style={{ marginLeft: '1%' }}
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
            {notification.imageUrl && (
              <div style={{ position: 'relative' }}>
                <img
                  src={notification.imageUrl}
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
          <div className="card ml-4 p-3">
            <RadioButton
              radioValue={radioValue}
              handleRadioChange={handleRadioChange}
              setRadioValue={setRadioValue}
            />
            {radioValue == 'part' && (
              <div className="d-flex">
                <MultipleSelect label={'Department'} />
                <MultipleSelect label={'Batch'} />
                <MultipleSelect label={'Section'} />
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary m-3"
              // onClick={handleOnSubmit}
            >
              Send
            </button>
          </div>
        </form>
        {status && <ResponseModal type="notification" />}
      </div>
    </WrapperContainer>
  );
};

export default Notification;
