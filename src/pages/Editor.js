import React, { useState } from "react";
import Layout from "../components/Layout";
import { ReactComponent as GenerateIcon } from "../assets/icon/generate.svg";
import { ReactComponent as SpinIcon } from "../assets/icon/spin.svg";
import { ReactComponent as NewIcon } from "../assets/icon/new.svg";
import { ReactComponent as PlusIcon } from "../assets/icon/plus-4f50c90a.svg";
import { ReactComponent as CameraIcon } from "../assets/icon/Camera-5fcd2aa0.svg";
import { AIPresenters, Presenters } from "../assets/image/DefaultPresenters";
import { Autocomplete, Box, TextField } from "@mui/material";
import { languages } from "../utils";

const Editor = () => {
  const [Image, setImage] = useState("");
  const [AIImage, setAIImage] = useState("");
  const [HQ, setHQ] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(1);
  const [type, setType] = useState("Script");
  const [voices, setVoices] = useState([]);
  const [styles, setStyles] = useState([]);

  const onChangeImage = (item) => {
    setImage(item.image);
    setHQ(item.HQ);
  };

  const onChangeAIImage = (item) => {
    setAIImage(item.image);
    setHQ(false);
  };
  return (
    <Layout tab="create">
      <div className="navbar">
        <div className="title">Create Video</div>
        <div className="btn-group">
          <button className="btn black">Discard Video</button>
          <button className="btn" disabled>
            <CameraIcon />
            Generate Video
          </button>
        </div>
      </div>
      <div className="content">
        <div className="editor">
          <div className="left">
            <div className="panel">
              {(tab === 1) | (AIImage !== "") && (
                <div className="title">Untitled Video</div>
              )}
              <div className="main-part">
                {tab === 2 && (
                  <div className="generate">
                    <div className="text">Generate an AI Presenter</div>
                    <div className="form">
                      <div className="label">A portrait of</div>
                      <div className="center">
                        <input
                          type="text"
                          placeholder="Click here for inspiration, or describe the presenter you'd like to create"
                        />
                      </div>
                      <button disabled>Generate</button>
                    </div>
                  </div>
                )}
                {tab === 1 && Image !== "" && (
                  <div className="image">
                    <div className={loading ? "spin-panel none" : ""}>
                      <div className="spin">
                        <SpinIcon />
                      </div>
                    </div>

                    <img className="photo" src={Image} alt="Presenter" />
                  </div>
                )}
                {tab === 2 && AIImage !== "" && (
                  <div className="image">
                    <div className={loading ? "spin-panel none" : ""}>
                      <div className="spin">
                        <SpinIcon />
                      </div>
                    </div>

                    <img className="photo" src={AIImage} alt="Presenter" />
                  </div>
                )}
              </div>
            </div>
            <div className="presenter">
              <div className="select">
                <div className="options">
                  <div className="tabs">
                    <div
                      className={tab === 1 ? "tab selected" : "tab"}
                      onClick={() => setTab(1)}
                    >
                      <div className="icon present" />
                      <div className="text">Choose a presenter</div>
                    </div>
                    <div
                      className={tab === 2 ? "tab selected" : "tab"}
                      onClick={() => setTab(2)}
                    >
                      <div className="icon generate">
                        <GenerateIcon />
                      </div>
                      <div className="text">Generate AI presenter</div>
                      <div className="new">
                        <NewIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {tab === 1 && (
                <div className="photos">
                  <div className="avatar">
                    <div className="background">
                      <PlusIcon />
                      <div className="text">ADD</div>
                    </div>
                  </div>
                  {Presenters.map((item) => (
                    <div
                      className={
                        item.image === Image
                          ? "avatar image selected"
                          : "avatar image"
                      }
                      onClick={() => onChangeImage(item)}
                    >
                      <div className="background">
                        <img src={item.image} alt="Presenter" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {tab === 2 && (
                <div className="photos">
                  <div className="avatar">
                    <div className="background">
                      <PlusIcon />
                      <div className="text">Create</div>
                    </div>
                  </div>
                  {AIPresenters.map((item) => (
                    <div
                      className={
                        item.image === AIImage
                          ? "avatar image selected"
                          : "avatar image"
                      }
                      onClick={() => onChangeAIImage(item)}
                    >
                      <div className="background">
                        <img
                          src={item.image}
                          className="ai"
                          alt="AIPresenter"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="right">
            <div className="right-panel">
              <div className="tabs">
                <div
                  className={type === "Script" ? "tab selected" : "tab"}
                  onClick={() => setType("Script")}
                >
                  <div className="icon script" />
                  <div className="text">Script</div>
                </div>
                <div
                  className={type === "Audio" ? "tab selected" : "tab"}
                  onClick={() => setType("Audio")}
                >
                  <div className="icon upload" />
                  <div className="text">Audio</div>
                </div>
                <span
                  className={
                    type === "Script" ? "indicator" : "indicator selected"
                  }
                />
              </div>
              {type === "Script" && (
                <div className="scripts">
                  <div className="textarea">
                    <textarea
                      placeholder="Type your script here, you can start from scratch or use our script-generation feature below."
                      maxLength="3875"
                    ></textarea>
                    <div className="tool">
                      <div className="group">
                        <span className="tag">
                          <button className="icon volume" disabled />
                        </span>
                        <hr />
                        <span className="tag">
                          <button className="icon watch" disabled />
                        </span>
                        <hr />
                        <span className="tag">
                          <button className="icon magic" disabled />
                        </span>
                      </div>
                      <div className="notification">3875 Characters left</div>
                    </div>
                  </div>
                  <Autocomplete
                    options={languages}
                    renderOption={(props, option) => (
                      <Box component="li" {...props}>
                        <img
                          loading="lazy"
                          width="24"
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        <span style={{ marginLeft: "20px" }}>
                          {option.label}
                        </span>
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Language"
                        placeholder="Search..."
                      />
                    )}
                  />
                  <Autocomplete
                    options={voices}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Voices"
                        placeholder="Search..."
                      />
                    )}
                  />
                  <Autocomplete
                    disabled
                    options={styles}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Styles"
                        placeholder="Search..."
                      />
                    )}
                  />
                </div>
              )}
              {type === "Audio" && (
                <div className="audio">
                  <div className="upload">
                    <div className="card">
                      <button className="btn">
                        <div className="icon" />
                        <h2>Upload your own voice</h2>
                        <h3>
                          Create more realistic videos by uploading your own
                          voice.
                        </h3>
                      </button>
                    </div>
                  </div>
                  <button className="record">
                    <div className="icon" />
                    <h3>
                      Record voice audio
                      <p>
                        <button>Contact us</button>&nbsp;to learn more about our
                        Enterprise plan
                      </p>
                    </h3>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Editor;
