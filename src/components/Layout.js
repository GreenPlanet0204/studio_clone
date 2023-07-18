import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children, tab }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={collapse ? "container zoom" : "container"}>
      <Sidebar collapse={collapse} setCollapse={setCollapse} tab={tab} />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
