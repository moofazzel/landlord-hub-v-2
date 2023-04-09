import DashboardLayout from "@/components/layouts/dashboard/dashboardLayout";
import { selectUser } from "@/features/userSlice";
import { useSelector } from "react-redux";

function UserProfile() {
  const { user } = useSelector(selectUser);
  return <div>This is user profile : {user?.email}</div>;
}

export default UserProfile;

UserProfile.Layout = DashboardLayout;
