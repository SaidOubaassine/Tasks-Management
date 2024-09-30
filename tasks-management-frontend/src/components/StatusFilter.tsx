"use client";

import { SideBarProps } from "@/types/global";

const StatusFilter = ({
  filterStatus,
}: {
  filterStatus: SideBarProps["filterStatus"];
}) => (
  <li className="nav-item" style={{ marginTop: 10 }}>
    <div>Filter by status</div>
    {["All", "En attente", "En cours", "Terminé"].map((status, index) => {
      const value =
        status === "All" ? "" : status.toLowerCase().replace(" ", "-");

      return (
        <div className="form-check form-check-inline pt-3" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name="statusOptions"
            id={`status${status}`}
            value={value}
            onChange={filterStatus}
          />
          <label className="form-check-label" htmlFor={`status${status}`}>
            {status}
          </label>
        </div>
      );
    })}
  </li>
);

export default StatusFilter;
