import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Registration from "./Pages/Registration";
import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import { Pageview } from "@mui/icons-material";

const ProtectedRoute = ({ user, children }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const LoggedInRoute = ({ user, children, page }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (loggedIn) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return children;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={"/login"}
            element={
              <LoggedInRoute>
                <Login />
              </LoggedInRoute>
            }
          />
          <Route
            path={"/register"}
            element={
              <LoggedInRoute>
                <Registration />
              </LoggedInRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            index
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path={"*"} Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
