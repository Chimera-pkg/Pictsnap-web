import React from "react";
import { NavbarAdminComponent } from "src/ui/components/NavbarComponent";
import { SidebarAdminComponent } from "src/ui/components/SidebarComponent";

export default function AdminLayout({ children, title }) {
  const defaultTitle = "Pictsnap Builder";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <div className="bg-gray-100">
        <NavbarAdminComponent />
        <div className="w-full flex">
          <SidebarAdminComponent />
          {children}
        </div>

        <div></div>
      </div>
    </>
  );
}
