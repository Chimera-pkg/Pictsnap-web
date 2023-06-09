import React, { useContext, useEffect } from "react";
import {
  FiActivity,
  FiAward,
  FiBook,
  FiBox,
  FiCheckSquare,
  FiDownload,
  FiGift,
  FiCalendar,
  FiHome,
  FiLayers,
  FiList,
  FiPlusSquare,
  FiSlack,
  FiUser,
  FiUsers,
  FiFeather,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { PageContext } from "src/context/PageContext";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "src/context/SidebarContext";

export function SidebarAdminComponent() {
  const { page, setPage } = useContext(PageContext);
  const location = useLocation();
  const { sidebar, setSidebar } = useContext(SidebarContext);

  useEffect(() => {
    setPage(location.pathname);
  }, [location]);

  const listPage = [
    {
      id: "home",
      link: "/",
      title: "Beranda",
      icon: FiHome,
      group: "Utama",
    },
    {
      id: "list-certificate",
      link: "/template",
      title: "Semua Template",
      icon: FiLayers,
      group: "Sertifikat",
    },
    {
      id: "create-certificate-template",
      link: "/buat-template",
      title: "Buat Template",
      icon: FiPlusSquare,
      group: "Sertifikat",
    },
    // {
    //   id: "profile",
    //   link: "/profile",
    //   title: "Profile",
    //   icon: FiSlack,
    //   group: "Akun",
    // },
  ];

  return (
    <div
      id="sideBar"
      className={`lg:flex flex-col flex-wrap bg-white text-dark border-r border-gray-100 p-6 min-h-screen lg:w-2/12 lg:shadow-xl pt-28 lg:pt-16 fixed lg:static 
      ${sidebar ? "flex z-30" : "hidden"}`}
    >
      <div className="flex flex-col">
        <div className="text-right hidden md:block mb-4">
          <button id="sideBarHideBtn">
            <i className="fad fa-times-circle"></i>
          </button>
        </div>

        {listPage.map((el, idx) => {
          return (
            <div key={idx}>
              {idx == 0 ? (
                <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
                  {el.group}
                </p>
              ) : (
                ""
              )}
              {idx > 0 && el.group != listPage[idx - 1].group ? (
                <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">
                  {el.group}
                </p>
              ) : (
                ""
              )}
              <Link
                to={el.link}
                className={
                  el.link == page
                    ? "mb-3 flex items-center capitalize font-medium text-sm text-[#FB8500] transition ease-in-out duration-500"
                    : "mb-3 flex items-center capitalize font-medium text-sm hover:text-[#FB8500] transition ease-in-out duration-500"
                }
              >
                <el.icon className="mr-3" />
                {el.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
