import "./LeftBar.css";
import { Link } from "react-router-dom";
import { useVideo } from "../Context/VideoProvider";
export function LeftBar() {
  const { darkMode } = useVideo();
  return (
    <div
      className="left_div"
      style={{ backgroundColor: darkMode ? "black" : "white" }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="leftBarDivContents">
          <span
            class="iconify leftbar_icons"
            data-icon="mdi:home"
            data-inline="false"
          ></span>
          <span
            style={{ color: darkMode && "white" }}
            className="left_bar_text"
          >
            HOME
          </span>
        </div>
      </Link>
      <Link to="/genre" style={{ textDecoration: "none" }}>
        <div className="leftBarDivContents">
          <span
            class="iconify leftbar_icons"
            data-icon="zondicons:explore"
            data-inline="false"
          ></span>
          <span
            style={{ color: darkMode && "white" }}
            className="left_bar_text"
          >
            EXPLORE
          </span>
        </div>
      </Link>
      <Link to="/likedvideo" style={{ textDecoration: "none" }}>
        <div className="leftBarDivContents">
          <span
            class="iconify leftbar_icons"
            data-icon="bx:bxs-like"
            data-inline="false"
          ></span>
          <span
            style={{ color: darkMode && "white" }}
            className="left_bar_text"
          >
            LIKED{" "}
          </span>
        </div>
      </Link>
      <Link to="/playlist" style={{ textDecoration: "none" }}>
        <div className="leftBarDivContents">
          <span
            class="iconify leftbar_icons"
            data-icon="zmdi:playlist-plus"
            data-inline="false"
          ></span>
          <span
            style={{ color: darkMode && "white" }}
            className="left_bar_text"
          >
            PLAYLIST
          </span>
        </div>
      </Link>
      <Link to="/historyvideo" style={{ textDecoration: "none" }}>
        <div className="leftBarDivContents">
          <span
            class="iconify leftbar_icons"
            data-icon="ri:history-fill"
            data-inline="false"
          ></span>
          <span
            style={{ color: darkMode && "white" }}
            className="left_bar_text"
          >
            HISTORY
          </span>
        </div>
      </Link>
    </div>
  );
}
