import Header from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
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

          <main className="flex-1">
            <Outlet />
          </main>

          <footer>
            <p><a href="/">BACK TO LOGIN</a></p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
