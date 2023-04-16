import { useEffect } from "react";
import Navbar from "../Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { useDispatch } from "react-redux";
import { login, logout } from "@/features/userSlice";

function MainLayout({ children }) {
  const dispatch = useDispatch();
  // check at page load if a user is authenticated for main layout
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
