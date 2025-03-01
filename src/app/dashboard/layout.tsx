// import { BlogDashboard } from "@/components/dashboard/blog-dashboard";
import Sidebar from "@/components/dashboard/sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex">
        <Sidebar />
        {/* <BlogDashboard /> */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;