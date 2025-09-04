import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBell,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaEnvelope,
  FaQuestionCircle,
  FaCalendarAlt,
  FaClock
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../custom-css/topbar.css";

const Topbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [username, setUsername] = useState("");
  const [register_number, setRegisterNumber] = useState("");
  const [standard, setStandard] = useState("");
  const [employee_id, setEmployeeId] = useState("");
  const [subject_specialization, setSubjectSpecialization] = useState("");
  const [role, setRole] = useState(""); // ✅ store role
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setUsername(user.name);
      setRole(user.role || ""); // ✅ set role

      if (user.role === "student") {
        setRegisterNumber(user.register_number || "");
        setStandard(user.standard || "");
      } else if (user.role === "teacher") {
        setEmployeeId(user.employee_id || "");
        setSubjectSpecialization(user.subject_specialization || "");
      }
    }
  }, []);

  const confirmLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(currentTime);

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  return (
    <>
      <nav className="topbar navbar navbar-expand navbar-dark bg-primary fixed-top px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div></div>
          <div className="d-flex align-items-center">
            {/* Date and Time */}
            <div className="d-flex align-items-center date-time-container me-4">
              <div className="date-display me-3">
                <FaCalendarAlt className="me-2" />
                <span className="date-text">{formattedDate}</span>
              </div>
              <div className="time-display">
                <FaClock className="me-2" />
                <span className="time-text">{formattedTime}</span>
              </div>
            </div>

            {/* Notification */}
            <button className="btn btn-icon position-relative me-3">
              <FaBell size={18} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>

            {/* User Dropdown */}
            <div className="user-dropdown" ref={dropdownRef}>
              <button
                className="btn btn-user d-flex align-items-center"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="user-avatar me-2">
                  {username ? (
                    <div className="avatar-initials">
                      {username.split(" ").map((n) => n[0]).join("")}
                    </div>
                  ) : (
                    <FaUserCircle size={24} />
                  )}
                </div>
                <span className="user-name">{username || "Guest User"}</span>
              </button>

              {showDropdown && (
                <div className="dropdown-menu show">
                  <div className="dropdown-header">
                    <div className="d-flex align-items-center">
                      <div className="user-avatar me-3">
                        {username ? (
                          <div className="avatar-initials bg-info">
                            {username.split(" ").map((n) => n[0]).join("")}
                          </div>
                        ) : (
                          <FaUserCircle size={36} />
                        )}
                      </div>
                      <div>
                        <div className="fw-bold">{username || "Guest User"}</div>

                        {/* Student Info */}
                        {role === "student" && (
                          <>
                            <small className="text-muted">
                              Reg: {register_number || "N/A"}
                            </small>
                            <br />
                            <small className="text-muted">
                              Std: {standard || "N/A"}
                            </small>
                          </>
                        )}

                        {/* Teacher Info */}
                        {role === "teacher" && (
                          <>
                            <small className="text-muted">
                              Emp ID: {employee_id || "N/A"}
                            </small>
                            <br />
                            <small className="text-muted">
                              Spec: {subject_specialization || "N/A"}
                            </small>
                          </>
                        )}

                        {/* Admin Info */}
                        {role === "admin" && (
                          <small className="text-muted">Admin Panel Access</small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <FaUserCircle className="me-2" /> Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <FaEnvelope className="me-2" /> Messages
                  </a>
                  <a className="dropdown-item" href="#">
                    <FaCog className="me-2" /> Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <FaQuestionCircle className="me-2" /> Help
                  </a>
                  <div className="dropdown-divider"></div>
                  <button
                    className="dropdown-item text-danger"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    <FaSignOutAlt className="me-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogoutModal(false)}
                ></button>
              </div>
              <div className="modal-body">Are you sure you want to log out?</div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={confirmLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
