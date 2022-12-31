import React, { useContext } from "react";

import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { SidebarContext } from "src/context/SidebarContext";
import AdminLayout from "src/layouts/AdminLayout";
import { CreateTemplatePage } from "./CreateTemplatePage";
import { HomePage } from "./HomePage";
import TemplatePage from "./TemplatePage";
import { UpdateTemplatePage } from "./UpdateTemplatePage";

export default function AdminRouterPage() {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <BrowserRouter>
      <AdminLayout>
        <div className="bg-gray-100 p-6 mt-16 lg:w-10/12 w-full text-dark min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/template" element={<TemplatePage />} />
          </Routes>
          <Routes>
            <Route path="/template/:name/:id" element={<UpdateTemplatePage />} />
          </Routes>
          <Routes>
            <Route
              path="/buat-template"
              element={<CreateTemplatePage />}
              exact
            />
          </Routes>
        </div>
      </AdminLayout>
    </BrowserRouter>
  );
}
