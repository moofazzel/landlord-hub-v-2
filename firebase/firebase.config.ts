// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyC6zmRvBbB3Y51m9lW81jFeLEO6WOhV9ZA",
//   authDomain: "landlord-hub-3f6a6.firebaseapp.com",
//   projectId: "landlord-hub-3f6a6",
//   storageBucket: "landlord-hub-3f6a6.appspot.com",
//   messagingSenderId: "11322192348",
//   appId: "1:11322192348:web:5db612848735f660115f19",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6zmRvBbB3Y51m9lW81jFeLEO6WOhV9ZA",
  authDomain: "landlord-hub-3f6a6.firebaseapp.com",
  projectId: "landlord-hub-3f6a6",
  storageBucket: "landlord-hub-3f6a6.appspot.com",
  messagingSenderId: "11322192348",
  appId: "1:11322192348:web:5db612848735f660115f19",
};

initializeApp(firebaseConfig);

//init services
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
};
