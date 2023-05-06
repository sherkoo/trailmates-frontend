import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Registration from "./Pages/Registration";
import Dashboard from "./Pages/Dashboard";
import { useSelector } from "react-redux";
import Messages from "./Pages/Messages";
import Search from "./Pages/Search";
import Settings from "./Pages/Settings";
import Newsfeed from "./Pages/Newsfeed";

// protect routes
const ProtectedRoute = ({ user, children }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (!loggedIn) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

// if user is logged in
const LoggedInRoute = ({ user, children, page }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (loggedIn) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return children;
};

// app
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
            path="/search"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Search />
                </Dashboard>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Settings />
                </Dashboard>
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Messages />
                </Dashboard>
              </ProtectedRoute>
            }
          />
          <Route
            index
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard>
                  <Newsfeed />
                </Dashboard>
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
