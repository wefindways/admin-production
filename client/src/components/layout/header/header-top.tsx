import { SidebarTrigger, SidebarFooter } from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavUser } from "@/components/navigation/nav-user"
import { useAuth } from "@/auth/context/AuthContext"

export function HeaderTop() {
  const { email, role } = useAuth();

  const navUser = {
    role: role ?? "",
    email: email ?? "no-email@example.com",
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <div className="flex justify-between border-b">
      <div className="flex h-16 items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator orientation="vertical" className="h-4" />
      </div>

      <div className="flex h-16 items-center gap-2 px-4">
        <ModeToggle />
        <SidebarFooter>
          <NavUser user={navUser} />
        </SidebarFooter>
      </div>
    </div>
  )
}
