import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AvatarIcon } from "../assets/icon/userAvatar.svg";
import { ReactComponent as BillingIcon } from "../assets/icon/Billing.svg";
import { ReactComponent as LoginIcon } from "../assets/icon/Login.svg";
import { ReactComponent as UpgradeIcon } from "../assets/icon/upgrade.svg";

const Sidebar = (props) => {
  const { collapse, setCollapse, tab } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo"></div>
      <div className="links">
        <Link to="/editor" className={tab === "create" ? "active" : ""}>
          <div className="icon create" />
          <span>Create Video</span>
        </Link>

        <Link to="/" className={tab === "library" ? "active" : ""}>
          <div className="icon library" />
          <span>Video Library</span>
        </Link>
        <div className="line" />
        <Link to="/" className={tab === "document" ? "active" : ""}>
          <div className="icon document" />
          <span>API Documentation</span>
        </Link>
        <Link to="/" className={tab === "support" ? "active" : ""}>
          <div className="icon support" />
          <span>Support</span>
        </Link>
        <div className="line" />
        <Link to="/" className={tab === "pricing" ? "active" : ""}>
          <div className="icon pricing" />
          <span>Pricing</span>
        </Link>
      </div>
      <div className="bottom">
        <div className="links">
          <Link to="/">
            <div className="icon notify"></div>
            <span>New</span>
          </Link>
        </div>
        <div className="collapse">
          <div className="btn" onClick={() => setCollapse(!collapse)} />
        </div>
        <div className="toggle" onClick={() => setToggle(!toggle)}>
          <div className="icon" />
          <span className="text">
            <span>Guest</span>
            <span className="icon arrow" />
          </span>
        </div>
        <div className={toggle ? "profile" : "profile none"}>
          <div className="content">
            <div className="credit">
              <div className="text">No credits yet...</div>
              <div className="line" />
              <div className="gray">Guest Plan</div>
              <div className="btn">
                <div className="text">Upgrade</div>
                <UpgradeIcon />
              </div>
            </div>
            <div className="user">
              <ul>
                <li>
                  <AvatarIcon />
                  <div>Settings & API</div>
                </li>
                <li>
                  <BillingIcon />
                  <div>Billing</div>
                </li>
                <li>
                  <LoginIcon />
                  <div>Login/Signup</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
