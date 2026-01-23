import { SidebarTrigger, SidebarFooter } from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { NavUser } from "@/components/navigation/nav-user"
import { data } from "@/hooks/sample-data"

export function HeaderTop() {
  return (
    <div className="flex justify-between border-b">
      <div className="flex h-16 items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator orientation="vertical" className="h-4" />
      </div>

      <div className="flex h-16 items-center gap-2 px-4">
        <ModeToggle />
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </div>
    </div>
  )
}
