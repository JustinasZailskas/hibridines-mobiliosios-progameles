import { initializeApp, getApps } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD0i2CLr1PlBkXFCP-LuYCMiEG8BT_UMVI",
  authDomain: "basketball-player-35f4a.firebaseapp.com",
  projectId: "basketball-player-35f4a",
  storageBucket: "basketball-player-35f4a.firebasestorage.app",
  messagingSenderId: "902336237833",
  appId: "1:902336237833:web:5ed4c17e5afbd4c25ec3d8",
  measurementId: "G-9RPTCH9JDT"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
