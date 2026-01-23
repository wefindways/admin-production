import Header from "@/components/layout/header/app-header";
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <aside>
          <AppSidebar />
        </aside>

        <div className="flex flex-1 flex-col">
          <header>
            <Header />
          </header>

          <main className="flex-1 p-2">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
