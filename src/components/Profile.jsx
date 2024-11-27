import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login....</div>;
  return (
    <>
      <div>Welcome : {user.userName}</div>
      <div> Password : {user.password}</div>
    </>
  );
}

export default Profile;
