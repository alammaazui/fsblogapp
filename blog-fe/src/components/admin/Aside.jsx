import React from "react";
import { NavLink } from "react-router";

export default function Aside() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width={40}
          height={32}
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>{" "}
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/admin/"
            className={({ active }) =>
              active ? "nav-link active" : "nav-link"
            }
            aria-current="page"
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#home" />
            </svg>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/adduser"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            Add User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/viewusers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            View Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/viewblogs"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            View Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/addblog"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            Add Blog
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>{" "}
        </a>{" "}
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          {" "}
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>{" "}
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}
