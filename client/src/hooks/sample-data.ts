import {
  MessageCircleMore,
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
          title: "All Projects",
          url: "#",
        },
        {
          title: "Ongoing Projects",
          url: "#",
        },
        {
          title: "Completed Projects",
          url: "#",
        },
      ],
    },
    {
      title: "Gallery",
      url: "#",
      icon: Images,
    },
    {
      title: "Inquiries",
      url: "#",
      icon: MessageCircleMore,
      items: [
        {
          title: "Message Request",
          url: "#",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: Wrench,
      items: [
        {
          title: "Manage Services",
          url: "#",
        },
        {
          title: "Edit Service Descriptions",
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
          title: "Team Members",
          url: "#",
        },
        {
          title: "Roles",
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
          title: "Contact",
          url: "#",
        },
        {
          title: "Logo & Branding",
          url: "#",
        },
      ],
    },
  ],
};