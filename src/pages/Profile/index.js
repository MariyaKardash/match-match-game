import { Header } from "../../components/Header";

import './Profile.css'

export function ProfilePage() {
  return (
    <>
      <Header />
      <div className="profile-container">
      <img
        src="/images/pages/profile/Bear-profile.svg"
        alt="bear"
        className="bear-profile-image"
      ></img>
      </div>
    </>
  );
}
