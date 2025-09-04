import React, { useState } from "react";
import Sidebar from "../skeleton_compoents/sidebar";
import Topbar from "../skeleton_compoents/Topbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [expanded, setExpanded] = useState(true); // 🔥 Sidebar state here

  return (
    <div className="app-layout" style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar - Pass expanded state */}
      <Sidebar expanded={expanded} setExpanded={setExpanded} />

      {/* Main Content Area */}
      <div className="content-area" style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar - Pass same expanded state */}
        <Topbar expanded={expanded} setExpanded={setExpanded} />

        {/* Page Content */}
        {/* <div className="main-content" style={{ flex: 1, padding: "20px", marginTop: "60px" }}> */}
        <div className="content-area" style={{
          flex: "1 1 0%",
          overflowY: "auto",  // Enables vertical scrolling
          padding: "10px",
          // marginTop: "16px"  // Adjust this value based on your topbar height 
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

