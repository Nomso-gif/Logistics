import { useState } from "react";
import UserProfile from "./UserProfile";
import Button from "./Button";

const Profile = () => {
  const [showUserProfile, setShowUserProfile] = useState(true);
  return (
    <div className="p-4">
      <Button
        text={"Toggle Profile"}
        onClick={() => setShowUserProfile((prev) => !prev)}
        className="bg-purple-600 text-white"
      />

      {/* Conditional component rendering*/}
      {showUserProfile && <UserProfile />}
    </div>
  );
};

export default Profile;
