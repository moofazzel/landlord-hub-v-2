import { logout } from "@/features/userSlice";
import { auth } from "@/firebase/firebase.config";
import { useDispatch } from "react-redux";

function LogoutButton() {
  const dispatch = useDispatch();
  function handleSignOut() {
    console.log("object");
    dispatch(logout());
    auth.signOut();
  }
  return (
    <>
      <button onClick={() => handleSignOut()}>Log Out</button>
    </>
  );
}

export default LogoutButton;
