"use client";
import ProfileHeader from "./components/ProfileHeader";
import StepOneProfileEdit from "./components/StepOne";

export const ProfileUser = () => {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-10 font-sans grid grid-rows-[auto_1fr_auto] gap-16">
      <ProfileHeader />
      <StepOneProfileEdit />
    </div>
  );
};

export default ProfileUser;
