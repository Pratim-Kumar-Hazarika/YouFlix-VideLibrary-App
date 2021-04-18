import { Link } from "react-router-dom";
import "./LikedVideo.css";
import { LeftBar } from "../LeftNavBar/LeftBar";
import { useVideo } from "../Context/VideoProvider";

export function LikedVideo() {
  const {
    state: { onClickLikeVideos },
    dispatch,
    darkMode
  } = useVideo();
  console.log("i am state", { onClickLikeVideos });
  return (
    <div className="like_content_div">
      <div style={{ padding: "1rem", marginTop: "5rem" }}>
        <LeftBar />
      </div>
      <div className="likesssss">
        <div style={{ display: "flex" }}>
          <h1 style={{ fontWeight: "700" }}>Liked Videos</h1>
          <div style={{ marginTop: "30px", marginLeft: ".5rem" }}>
            {" "}
            <span
              class="iconify leftbar_icons"
              data-icon="bx:bxs-like"
              data-inline="false"
            ></span>
          </div>
        </div>
        <div className="likedVideoDiv">
          {onClickLikeVideos.map((item) => {
            const { id, thumbnail, name, views, artist } = item;
            return (
              <>
                <div className="video_div_liked">
                  <div className="thubmnail_div_liked">
                    <Link to={{ pathname: `/video/${id}` }}>
                      <img
                        className="thumbnail_img_liked"
                        src={thumbnail}
                        alt="thumbnail"
                      />
                    </Link>
                  </div>
                  <div className="video_contents_liked">
                    <h3 style={{ color: darkMode ? "white" : "black" }}>
                      {name}
                    </h3>
                    <span style={{ color: darkMode ? "white" : "black" }}>
                      {" "}
                      {artist} ♪
                    </span>
                    <div
                      onClick={() =>
                        dispatch({ type: "DELETE_VIDEO", payload: item })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <span
                        class="iconify dustbinIcon"
                        data-icon="mdi:delete"
                        data-inline="false"
                      ></span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
