import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome, FaUserGraduate, FaBook, FaSchool, FaUsers,
  FaRegFileAlt, FaSearch, FaCog, FaBars, FaChevronDown,
  FaChevronUp, FaList, FaPlus, FaFileAlt, FaCheckCircle,
  FaPlay, FaQuestionCircle, FaSignOutAlt, FaChalkboardTeacher,
  FaUserTie, FaCalendarAlt, FaClipboardList, FaBus, FaMoneyBillWave,
  FaLaptop, FaBookOpen, FaUserFriends, FaChartBar, FaBell, FaBuilding, FaVenusMars,
  FaFileInvoiceDollar, FaTint, FaFemale, FaMale, FaPray, FaFlag, FaMapMarkedAlt, FaGlobe, FaGraduationCap
} from "react-icons/fa";

import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => (prev === menu ? "" : menu));
  };

  const renderNavItem = (to, icon, label, extraActivePaths = []) => {
    const isActive = [to, ...extraActivePaths].includes(location.pathname);

    return (
      <li className="nav-item">
        {expanded ? (
          <NavLink
            to={to}
            className={`nav-link text-white ${isActive ? "active" : ""}`}
          >
            {icon} <span className="ms-2">{label}</span>
          </NavLink>
        ) : (
          <OverlayTrigger placement="right" overlay={<Tooltip>{label}</Tooltip>}>
            <NavLink
              to={to}
              className={`nav-link text-white d-flex align-items-center ${isActive ? "active" : ""}`}
            >
              {icon}
            </NavLink>
          </OverlayTrigger>
        )}
      </li>
    );
  };

  return (
    <div className="d-flex">
      <div className={`sidebar bg-primary text-white d-flex flex-column ${expanded ? "expanded" : "collapsed"}`}>

        <div className="sidebar-header d-flex align-items-center p-2 bg-white shadow-sm custom-margin-top">
          <button
            className={`btn me-2 golden-btn ${expanded ? "rotate" : ""}`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <FaBookOpen className="golden-icon" />
            ) : (
              <FaBook className="golden-icon" />
            )}
          </button>

          {expanded && (
            <h5 className="montfort-title">Montfort School</h5>
          )}
        </div>

        <ul className="nav flex-column flex-grow-1 p-2">
          {renderNavItem(
            "/student/dashboard",
            <FaHome />,
            "Dashboard",
            ["/teacher/dashboard", "/admin/dashboard"]
          )}

          {/* Academics Menu */}
          <li className="nav-item">
            {expanded ? (
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => toggleSubmenu("academics")}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <FaBookOpen className="me-2" />
                  Academics
                </div>
                {submenuOpen === "academics" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            ) : (
              <OverlayTrigger placement="right" overlay={<Tooltip>Academics</Tooltip>}>
                <div
                  className="nav-link text-white d-flex align-items-center"
                  onClick={() => toggleSubmenu("academics")}
                  style={{ cursor: "pointer" }}
                >
                  <FaBookOpen />
                </div>
              </OverlayTrigger>
            )}

            {submenuOpen === "academics" && expanded && (
              <ul className="submenu ps-3">
                {renderNavItem("/academics/timetable", <FaCalendarAlt />, "Timetable")}
                {renderNavItem("/academics/subjects", <FaBook />, "Subjects")}
                {renderNavItem("/academics/syllabus", <FaClipboardList />, "Syllabus")}
                {renderNavItem("/academics/exams", <FaFileAlt />, "Exams")}
                {renderNavItem("/academics/assignments", <FaList />, "Assignments")}
                {renderNavItem("/academics/online-classes", <FaLaptop />, "Online Classes")}
              </ul>
            )}
          </li>

          {/* Students Menu */}
          <li className="nav-item">
            {expanded ? (
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => toggleSubmenu("students")}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <FaUserGraduate className="me-2" />
                  Students
                </div>
                {submenuOpen === "students" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            ) : (
              <OverlayTrigger placement="right" overlay={<Tooltip>Students</Tooltip>}>
                <div
                  className="nav-link text-white d-flex align-items-center"
                  onClick={() => toggleSubmenu("students")}
                  style={{ cursor: "pointer" }}
                >
                  <FaUserGraduate />
                </div>
              </OverlayTrigger>
            )}

            {submenuOpen === "students" && expanded && (
              <ul className="submenu ps-3">
                {renderNavItem("/students/list", <FaList />, "Student List")}
                {renderNavItem("/students/attendance", <FaCheckCircle />, "Attendance")}
                {renderNavItem("/students/performance", <FaChartBar />, "Performance")}
                {renderNavItem("/students/promotion", <FaUserGraduate />, "Promotion")}
                {renderNavItem("/students/parents", <FaUserFriends />, "Parents")}
              </ul>
            )}
          </li>

          {/* Staff Menu */}
          <li className="nav-item">
            {expanded ? (
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => toggleSubmenu("staff")}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <FaChalkboardTeacher className="me-2" />
                  Staff
                </div>
                {submenuOpen === "staff" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            ) : (
              <OverlayTrigger placement="right" overlay={<Tooltip>Staff</Tooltip>}>
                <div
                  className="nav-link text-white d-flex align-items-center"
                  onClick={() => toggleSubmenu("staff")}
                  style={{ cursor: "pointer" }}
                >
                  <FaChalkboardTeacher />
                </div>
              </OverlayTrigger>
            )}

            {submenuOpen === "staff" && expanded && (
              <ul className="submenu ps-3">
                {renderNavItem("/staff/teachers", <FaUserTie />, "Teachers")}
                {renderNavItem("/staff/non-teaching", <FaUsers />, "Non-Teaching Staff")}
                {renderNavItem("/staff/attendance", <FaCheckCircle />, "Attendance")}
                {renderNavItem("/staff/leave", <FaCalendarAlt />, "Leave Management")}
              </ul>
            )}
          </li>

          {/* Administration Menu */}
          {renderNavItem("/school-info", <FaSchool />, "School Information")}
          {renderNavItem("/user-management", <FaUsers />, "User Management")}
          {renderNavItem("/search", <FaSearch />, "Student Search")}

          {/* Finance Menu */}
          <li className="nav-item">
            {expanded ? (
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => toggleSubmenu("finance")}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <FaMoneyBillWave className="me-2" />
                  Finance
                </div>
                {submenuOpen === "finance" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            ) : (
              <OverlayTrigger placement="right" overlay={<Tooltip>Finance</Tooltip>}>
                <div
                  className="nav-link text-white d-flex align-items-center"
                  onClick={() => toggleSubmenu("finance")}
                  style={{ cursor: "pointer" }}
                >
                  <FaMoneyBillWave />
                </div>
              </OverlayTrigger>
            )}

            {submenuOpen === "finance" && expanded && (
              <ul className="submenu ps-3">
                {renderNavItem("/finance/fees", <FaMoneyBillWave />, "Fee Management")}
                {renderNavItem("/finance/payments", <FaFileInvoiceDollar />, "Payments")}
                {renderNavItem("/finance/expenses", <FaRegFileAlt />, "Expenses")}
                {renderNavItem("/finance/reports", <FaChartBar />, "Financial Reports")}
              </ul>
            )}
          </li>

          {/* Transport Menu */}
          {renderNavItem("/transport", <FaBus />, "Transport")}

          {/* Reports Menu */}
          <li className="nav-item">
            {expanded ? (
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => toggleSubmenu("reports")}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <FaChartBar className="me-2" />
                  Reports
                </div>
                {submenuOpen === "reports" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            ) : (
              <OverlayTrigger placement="right" overlay={<Tooltip>Reports</Tooltip>}>
                <div
                  className="nav-link text-white d-flex align-items-center"
                  onClick={() => toggleSubmenu("reports")}
                  style={{ cursor: "pointer" }}
                >
                  <FaChartBar />
                </div>
              </OverlayTrigger>
            )}

            {submenuOpen === "reports" && expanded && (
              <ul className="submenu ps-3">
                {renderNavItem("/reports/academic", <FaBook />, "Academic Reports")}
                {renderNavItem("/reports/attendance", <FaCheckCircle />, "Attendance Reports")}
                {renderNavItem("/reports/examination", <FaFileAlt />, "Examination Reports")}
                {renderNavItem("/reports/financial", <FaMoneyBillWave />, "Financial Reports")}
              </ul>
            )}
          </li>

          {/* Configuration Menu */}
          <li className="nav-item">
            {expanded ? (
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => toggleSubmenu("config")}
                style={{ cursor: "pointer" }}
              >
                <div>
                  <FaCog className="me-2" />
                  Masters
                </div>
                {submenuOpen === "config" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            ) : (
              <OverlayTrigger placement="right" overlay={<Tooltip>Masters</Tooltip>}>
                <div
                  className="nav-link text-white d-flex align-items-center"
                  onClick={() => toggleSubmenu("config")}
                  style={{ cursor: "pointer" }}
                >
                  <FaCog />
                </div>
              </OverlayTrigger>
            )}

            {submenuOpen === "config" && expanded && (
              <ul className="submenu ps-3 scrollable-masters">
                {renderNavItem("/MasterCity", <FaBuilding />, "Cities")}
                {renderNavItem("/MasterGender", <FaVenusMars />, "Gender")}
                {renderNavItem("/MasterBloodGroup", <FaTint />, "Blood Groups")}
                {renderNavItem("/MasterMotherOccupation", <FaFemale />, "Mother Occupation")}
                {renderNavItem("/MasterFatherOccupation", <FaMale />, "Father Occupation")}

                {renderNavItem("/MasterStd", <FaBook  />, "Standard")}
                {renderNavItem("/MasterSubjectSpecialization", <FaChalkboardTeacher  />, "Subject Specialization")}
                {renderNavItem("/MasterQualification", <FaGraduationCap  />, "Qualification")}
                {renderNavItem("/MasterNationality", <FaFlag />, "Nationality")}
                {renderNavItem("/MasterState", <FaMapMarkedAlt />, "State")}
                {renderNavItem("/MasterCountry", <FaGlobe />, "Country")}
                {renderNavItem("/MasterCountry", <FaGlobe />, "Country")}
                 {renderNavItem("/MasterState", <FaMapMarkedAlt />, "State")}
                {renderNavItem("/MasterCountry", <FaGlobe />, "Country")}
                {renderNavItem("/MasterCountry", <FaGlobe />, "Country")}
              </ul>
            )}
          </li>
        </ul>

        {/* Add some custom CSS for the scrollable masters menu */}
        <style>
          {`
            @media (min-width: 992px) {
              .scrollable-masters {
                max-height: 300px;
                overflow-y: auto;
              }
              
              .scrollable-masters::-webkit-scrollbar {
                width: 6px;
              }
              
              .scrollable-masters::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 10px;
              }
              
              .scrollable-masters::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.3);
                border-radius: 10px;
              }
              
              .scrollable-masters::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.5);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Sidebar;