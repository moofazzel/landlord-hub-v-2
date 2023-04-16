import {
  auth,
  googleProvider,
  signInWithPopup,
} from "@/firebase/firebase.config";
import { useRouter } from "next/router";
import GoogleIcon from "../icons/GoogleIcon";
import { toast } from "react-toastify";
import { useSaveUserMutation } from "@/features/api/apiSlice";
import { useEffect, useState } from "react";

function GoogleSignInBtn({ Children }) {
  const [loading, setLoading] = useState(false);

  // Save user to DB
  const [saveUserDB, { isSuccess }] = useSaveUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Google Log in", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [isSuccess]);

  const router = useRouter();

  const GoogleSignUp = () => {
    setLoading(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          const userInfo = {
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            role: "user",
            createdAt: new Date(),
            method: "google",
          };

          // Save user to DB
          saveUserDB(userInfo);

          setLoading(false);

          toast.success("Google Log in", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            progress: undefined,
            theme: "colored",
          });
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        if (error) {
          setLoading(false);

          // alert(error);
          toast.error(error, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
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
      {loading && (
        <div className="w-8 h-8 rounded-full animate-spin border-4 border-solid border-lh-main border-t-transparent"></div>
      )}
      {!loading && <GoogleIcon />}
    </button>
  );
}

export default GoogleSignInBtn;
