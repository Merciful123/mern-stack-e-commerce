import { useEffect } from "react";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    // Dispatch signOutAsync only if user is logged in
    if (user) {
      dispatch(signOutAsync());
    }
  }, [dispatch, user]); // Specify dependencies properly

  // Redirect to login page if user is logged out
  return <>{!user && <Navigate to="/login" replace={true} />}</>;
}

export default Logout;
