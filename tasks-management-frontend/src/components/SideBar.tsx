"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import StatusFilter from "./StatusFilter";
import { SideBarProps } from "@/types/global";

function SideBar({ search, filterStatus }: SideBarProps) {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-dark fixed-top bg-primary">
      <div className="container-fluid">
        <Link href="/tasks" className="navbar-brand">
          Tasks Management
        </Link>

        {pathname === "/tasks" && (
          <div className="d-flex justify-content-center" role="search">
            <input
              className="form-control me-2"
              type="search"
              style={{ height: 30 }}
              placeholder="Search"
              aria-label="Search"
              onChange={search}
            />
          </div>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Task Management
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link href="/tasks" className="nav-link">
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tasks/create" className="nav-link">
                  Create Task
                </Link>
              </li>

              {pathname === "/tasks" && (
                <StatusFilter filterStatus={filterStatus} />
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
