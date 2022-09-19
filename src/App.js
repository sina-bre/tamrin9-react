import "./App.css";
import Componenet from "./Component";
import Login from "./Login";
import { Routes, Route, Link } from "react-router-dom";
import DashBooard from "./DashBoard";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashBoard">
          <Route index element={<DashBooard />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
