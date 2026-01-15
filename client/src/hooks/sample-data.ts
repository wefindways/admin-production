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
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderOpenDot,
      items: [
        {
          title: "View All Projects",
          url: "all-projects",
        },
        {
          title: "Add New Project",
          url: "add-projects",
        },
      ],
    },
    {
      title: "Team",
      url: "#",
      icon: ShieldHalf,
      items: [
        {
          title: "Team Directory",
          url: "team-directory",
        },
        {
          title: "Roles & Permissions",
          url: "roles",
        },
      ],
    },
    {
      title: "Portfolio",
      url: "#",
      icon: Images,
      items: [
        {
          title: "Manage Images",
          url: "manage-images",
        },
        {
          title: "Project Showcase",
          url: "project-showcase",
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
      url: "#",
      icon: Wrench,
      items: [
        {
          title: "Service List",
          url: "service-list",
        },
        {
          title: "Add / Edit Services",
          url: "update-services",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile Settings",
          url: "profile-settings",
        },
        {
          title: "Firm Info",
          url: "firm-info",
        },
      ],
    },
  ],
};