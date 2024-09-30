"use client";

import SideBar from "@/components/SideBar";
import { useState, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import { StatusContext } from "@/utils/context/TaskContext";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const handleStatusChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStatus(e.target.value);
    },
    []
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    []
  );

  return (
    <main>
      <Toaster position="top-center" />
      <SideBar filterStatus={handleStatusChange} search={handleSearchChange} />
      <StatusContext.Provider value={{ status, search }}>
        {children}
      </StatusContext.Provider>
    </main>
  );
}
