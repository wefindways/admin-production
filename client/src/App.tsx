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

      <Route element={<Layout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />

        <Route
          path="/all-projects"
          element={
            <ProtectedRoute>
              <AllProject />
            </ProtectedRoute>} />

        <Route
          path="/add-projects"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>} />

        <Route
          path="/team-directory"
          element={
            <ProtectedRoute>
              <TeamDirectory />
            </ProtectedRoute>} />

        <Route
          path="/roles"
          element={
            <ProtectedRoute>
              <Roles />
            </ProtectedRoute>} />

        <Route
          path="/manage-images"
          element={
            <ProtectedRoute>
              <ManageImages />
            </ProtectedRoute>} />

        <Route
          path="/project-showcase"
          element={
            <ProtectedRoute>
              <ProjectShowcase />
            </ProtectedRoute>} />

        <Route
          path="/service-list"
          element={
            <ProtectedRoute>
              <ServiceList />
            </ProtectedRoute>} />

        <Route
          path="/update-services"
          element={
            <ProtectedRoute>
              <UpdateServices />
            </ProtectedRoute>} />

        <Route
          path="/profile-settings"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>} />

        <Route
          path="/firm-info"
          element={
            <ProtectedRoute>
              <FirmInfo />
            </ProtectedRoute>} />
      </Route>
    </Routes>
  );
};

export default App;
