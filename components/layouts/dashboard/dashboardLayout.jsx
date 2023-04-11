import Aside from "@/components/dashboard/aside";
import Navbar from "../Navbar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { login, logout, selectUser } from "@/features/userSlice";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const currentUser = useSelector(selectUser);
  console.log(currentUser);

  // =================== Auth observer ===================
  const dispatch = useDispatch();
  // check at page load if a user is authenticated
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
  // =================== Auth observer ===================

  // Protect from unauthenticated users
  // useEffect(() => {
  //   if (currentUser) {
  //     console.log("signed in!");
  //   } else if (currentUser == null) {
  //     router.push("/login");
  //   }
  // }, [currentUser]);

  // if (!currentUser) {
  //   // user is signed out or still being checked.
  //   // don't render anything

  //   return <p>Loading..</p>;
  // }

  return (
    <>
      <main>
        <div className="md:hidden block ">
          <Navbar />
        </div>
        {/* Side bar */}
        <div className="flex">
          <Aside />

          {/* All dashboard page goes here */}
          <div className="md:bg-lh-grey-200 w-full h-full md:ml-[110px] lg:ml-[300px]">
            <div className="my-10">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
