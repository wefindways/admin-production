import { Routes, Route } from "react-router-dom";

import Layout from "./layout/layout";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./auth/context/ProtectedRoute";
import AllProject from "./pages/projects/all-projects";
import AddProject from "./pages/projects/add-project";
import Roles from "./pages/team/roles";
import TeamDirectory from "./pages/team/theme-directory";
import ManageImages from "./pages/portfolio/manage-images";
import ProjectShowcase from "./pages/portfolio/project-showcase";
import ServiceList from "./pages/services/service-list";
import UpdateServices from "./pages/services/update-services";
import ProfileSettings from "./pages/settings/profile-settings";
import FirmInfo from "./pages/settings/firm-info";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
        
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="projects">
            <Route path="all-projects" element={<AllProject />} />
            <Route path="add-projects" element={<AddProject />} />
          </Route>

          <Route path="team">
            <Route path="team-directory" element={<TeamDirectory />} />
            <Route path="roles" element={<Roles />} />
          </Route>

          <Route path="portfolio">
            <Route path="manage-images" element={<ManageImages />} />
            <Route path="project-showcase" element={<ProjectShowcase />} />
          </Route>

          <Route path="services">
            <Route path="service-list" element={<ServiceList />} />
            <Route path="update-services" element={<UpdateServices />} />
          </Route>

          <Route path="settings">
            <Route path="profile-settings" element={<ProfileSettings />} />
            <Route path="firm-info" element={<FirmInfo />} />
          </Route>

        </Route>
      </Route>
    </Routes>
  );
};

export default App;
