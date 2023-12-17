// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyBG0Yri7celuuCw_tgCJoTw9FdPBOYx3Nk',
//   authDomain: 'alliance-admin-83db0.firebaseapp.com',
//   projectId: 'alliance-admin-83db0',
//   storageBucket: 'alliance-admin-83db0.appspot.com',
//   messagingSenderId: '638752092430',
//   appId: '1:638752092430:web:d5ef44e5f7affbdfe4675f',
//   measurementId: 'G-HXXC8MZHKE',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyDCwOUEv4XGvGMSu0mn8hujh44rUmDd5yU',
  authDomain: 'genius-eth.firebaseapp.com',
  databaseURL: 'https://genius-eth-default-rtdb.firebaseio.com',
  projectId: 'genius-eth',
  storageBucket: 'genius-eth.appspot.com',
  messagingSenderId: '502967306119',
  appId: '1:502967306119:web:94dd070d4f6cdc7d213522',
  measurementId: 'G-6DZQYV8KFQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { auth, storage };
