import {
  Wrench,
  ShieldHalf,
  Images,
  Settings,
  LayoutDashboard,
  FolderOpenDot,
} from "lucide-react";

export const data = {
  user: {
    name: "shadcn",
    email: "marcjosephcruz24@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Projects",
      url: "projects",
      icon: FolderOpenDot,
      items: [
        {
          title: "View All Projects",
          url: "projects/all-projects",
        },
        {
          title: "Add New Project",
          url: "projects/add-projects",
        },
      ],
    },
    {
      title: "Team",
      url: "team",
      icon: ShieldHalf,
      items: [
        {
          title: "Team Directory",
          url: "team/team-directory",
        },
        {
          title: "Roles & Permissions",
          url: "team/roles",
        },
      ],
    },
    {
      title: "Portfolio",
      url: "portfolio",
      icon: Images,
      items: [
        {
          title: "Manage Images",
          url: "portfolio/manage-images",
        },
        {
          title: "Project Showcase",
          url: "portfolio/project-showcase",
        }
      ]
    },
    // {
    //   title: "Inquiries",
    //   url: "#",
    //   icon: MessageCircleMore,
    //   items: [
    //     {
    //       title: "Message Request",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Services",
      url: "services",
      icon: Wrench,
      items: [
        {
          title: "Service List",
          url: "services/service-list",
        },
        {
          title: "Add / Edit Services",
          url: "services/update-services",
        },
      ],
    },
    {
      title: "Settings",
      url: "settings",
      icon: Settings,
      items: [
        {
          title: "Profile Settings",
          url: "settings/profile-settings",
        },
        {
          title: "Firm Info",
          url: "settings/firm-info",
        },
      ],
    },
  ],
};