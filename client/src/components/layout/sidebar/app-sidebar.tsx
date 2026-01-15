"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { NavMain } from "@/components/navigation/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "@/components/ui/sidebar";

import logo from "@/assets/archa-logo.png";
import collapsedLogo from "@/assets/collapsed-logo.png";

import { Link } from "react-router-dom";

import { data as sidebarData } from "@/hooks/sample-data";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Sidebar collapsible="icon" {...props}>
        <div className="border-b">
          <Link to="/" className="flex h-16 items-center px-3">
            {/* Full logo (expanded) */}
            <img
              src={logo}
              alt="Archa logo"
              className="
              h-8 w-50 object-contain
              group-data-[collapsible=icon]:hidden"
            />

            {/* A mark (collapsed) */}
            <img
              src={collapsedLogo}
              alt="Archa mark"
              className="
              hidden h-5 w-50 object-contain
              group-data-[collapsible=icon]:block"
            />
          </Link>
        </div>

        <SidebarContent>
          <NavMain items={sidebarData.navMain} />
        </SidebarContent>
        
        <SidebarRail />
      </Sidebar>
    </motion.div>
  );
}
