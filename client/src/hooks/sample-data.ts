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
          url: "#",
        },
        {
          title: "Add New Project",
          url: "#",
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
          url: "#",
        },
        {
          title: "Roles & Permissions",
          url: "#",
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
          url: "#",
        },
        {
          title: "Project Showcase",
          url: "#",
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
          url: "#",
        },
        {
          title: "Add / Edit Services",
          url: "#",
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
          url: "#",
        },
        {
          title: "Firm Info",
          url: "#",
        },
      ],
    },
  ],
};