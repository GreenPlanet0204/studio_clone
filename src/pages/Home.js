import React, { useState } from "react";
import Layout from "../components/Layout";
import { ReactComponent as SearchIcon } from "../assets/icon/search.svg";
import { ReactComponent as PlayIcon } from "../assets/icon/play.svg";
import { ReactComponent as DownloadIcon } from "../assets/icon/download.svg";
import { ReactComponent as ShareIcon } from "../assets/icon/share.svg";
import { ReactComponent as RemoveIcon } from "../assets/icon/remove.svg";
import Avatar from "../assets/avatar.png";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout tab="library">
      <div className="navbar">
        <div className="title">Video Library</div>
        <div className="btn">Create Video</div>
      </div>
      <div className="content">
        <div className="main-content">
          <div className="table">
            <div className="search">
              <SearchIcon />
              <input type="text" placeholder="Search..." />
            </div>

            <div className="row">
              <div className="col">
                <div className="item">
                  <div className="body">
                    <div className="image">
                      <img src={Avatar} alt="Avatar" />
                    </div>
                    <div className="time">01:00</div>
                    <div
                      className="video-container"
                      onMouseLeave={() => setOpen(false)}
                    >
                      <div className="play">
                        <PlayIcon />
                      </div>
                      <div
                        className={open ? "btn" : "btn none"}
                        onClick={() => setOpen(!open)}
                      >
                        <ul>
                          <li className="list download">
                            <div className="icon">
                              <DownloadIcon />
                            </div>
                            <div className="text">Download</div>
                          </li>
                          <li className="list share">
                            <div className="icon">
                              <ShareIcon />
                            </div>
                            <div className="text">Share</div>
                            <div className="arrow" />
                          </li>
                          <li className="list remove">
                            <div className="icon">
                              <RemoveIcon />
                            </div>
                            <div className="text">Delete</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="title">Welcome</div>
                    <div className="date">May 16, 2023</div>
                  </div>
                </div>
              </div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
