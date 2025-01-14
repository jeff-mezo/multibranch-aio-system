"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Building,
  ChevronDown,
  ChevronUp,
  History,
  Laptop,
  Layout,
  LucideIcon,
  Menu,
  PersonStanding,
  Receipt,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
  dropdownLinks?: { href: string; label: string }[];
}

// COMPONENTS (SidebarLink, SidebarLinkDropdown)

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        }
          hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
            isActive ? "bg-blue-200 text-white" : ""
          }
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />

        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const SidebarLinkDropdown = ({
  icon: Icon,
  label,
  isCollapsed,
  dropdownLinks = [],
}: SidebarLinkProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  // const isActive =
  //   pathname === href || (pathname === "/" && href === "/dashboard");

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div>
      <div
        onClick={toggleExpand}
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors `}
      >
        <Icon className="w-6 h-6 !text-gray-700" />

        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>

        {dropdownLinks.length > 0 && !isCollapsed && (
          <span className="ml-auto">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </span>
        )}
      </div>

      {isExpanded && dropdownLinks.length > 0 && !isCollapsed && (
        <div className="pl-12">
          {dropdownLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className="cursor-pointer py-2 hover:text-blue-500 hover:bg-blue-100 transition-colors">
                <span className="font-medium text-gray-700">{link.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// const sidebarItems = [
//   {
//     title: "MENU",
//     items: [
//       {
//         icon: "",
//         label: "Dashboard",
//         href: "/",
//         visible: [""]
//       }
//     ]
// ]

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>Logo</div>
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-bold text-xl`}
        >
          Company
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu size={18} />
        </button>
      </div>

      <div className="flex-grow mt-8">
        {/* Links here */}
        <SidebarLink
          href="/"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLinkDropdown
          icon={Building}
          label="Branches"
          isCollapsed={isSidebarCollapsed}
          dropdownLinks={[
            { href: "/list/mangagoy", label: "Mangagoy" },
            { href: "/list/mangagoy", label: "Barobo" },
            { href: "/list/mangagoy", label: "Tandag" },
          ]}
          href={""}
        />
        <SidebarLink
          href="/list/invoice"
          icon={Receipt}
          label="Invoice"
          isCollapsed={isSidebarCollapsed}
        />

        <SidebarLink
          href="/list/management"
          icon={Users}
          label="Management"
          isCollapsed={isSidebarCollapsed}
        />

        <SidebarLink
          href="/list/history"
          icon={History}
          label="History"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={isSidebarCollapsed ? "hidden" : "block"}>
        <p className="text-center text-xs text-gray-500">
          &copy; Infinitech 2025
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
