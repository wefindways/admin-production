import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../navigation/breadcrumb";
import { SidebarTrigger, SidebarFooter } from "../../ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { NavUser } from "../../navigation/nav-user";

// Sample data
import { data as sidebarData } from "@/hooks/sample-data";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>

      <div className="flex justify-between border-b ">
        <div className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex h-16 shrink-0 items-center gap-2 px-4">

          <ModeToggle />
          <SidebarFooter>
            <NavUser user={sidebarData.user} />
          </SidebarFooter>
        </div>
      </div>
    </motion.div>
  );
}
