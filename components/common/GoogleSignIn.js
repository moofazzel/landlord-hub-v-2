import {
  auth,
  googleProvider,
  signInWithPopup,
} from "@/firebase/firebase.config";

export const GoogleSignUp = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      user && router.push("/");
    })
    .catch((error) => {
      alert(error);
    });
};
