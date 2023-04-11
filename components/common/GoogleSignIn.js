import {
  auth,
  googleProvider,
  signInWithPopup,
} from "@/firebase/firebase.config";
import { useRouter } from "next/router";
import GoogleIcon from "../icons/GoogleIcon";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "@/features/userSlice";
import { toast } from "react-toastify";

function GoogleSignInBtn({ Children }) {
  const { loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  const GoogleSignUp = () => {
    dispatch(
      loginWithGoogle({
        loading: true,
      })
    );

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          console.log("inside login", user);
          dispatch(
            loginWithGoogle({
              loading: false,
            })
          );
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        if (error) {
          dispatch(
            loginWithGoogle({
              loading: false,
            })
          );
          // alert(error);
          toast.error(error, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  return (
    <button
      onClick={() => GoogleSignUp()}
      className="flex justify-center input"
    >
      {Children}
      {loading ? (
        <div className="w-8 h-8 rounded-full animate-spin border-4 border-solid border-lh-main border-t-transparent"></div>
      ) : (
        <GoogleIcon />
      )}
    </button>
  );
}

export default GoogleSignInBtn;
