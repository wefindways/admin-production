import { Routes, Route } from "react-router-dom";
import History from "./pages/history";
import Settings from "./pages/settings";
import Starred from "./pages/starred";
import Dashboard from "./pages/dashboard";
import Layout from "./layout/layout";
import Login from "./pages/login";
import ProtectedRoute from "./auth/context/ProtectedRoute";

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
            
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/starred" element={<Starred />} />
      </Route>
    </Routes>
  );
};

export default App;
