import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Registration from "./Pages/Registration";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Login} />
          <Route path={"/login"} Component={Login} />
          <Route path={"/register"} Component={Registration} />
          <Route path={"/dashboard"} Component={Dashboard} />
          <Route path={"*"} Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
