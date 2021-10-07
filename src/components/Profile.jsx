import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Feed from "../components/Feed";
import "../styles/profile.css"
export default function Profile() {
  return (
    <>
      <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="assets/post/3.jpeg"
              alt=""
            />
            <img
              className="profileUserImg"
              src="assets/person/7.jpeg"
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">Arindol Das</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </div>
    </>

  );
}
