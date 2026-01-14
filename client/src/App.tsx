import { Routes, Route } from "react-router-dom";
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
      </Route>
    </Routes>
  );
};

export default App;
