import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Components.jsx/Welcome";
import Login from "./Components.jsx/Login";
import Register from "./Components.jsx/Register";
import EmployeeDashboard from "./Components.jsx/EmployeeDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/dashboard" element={<EmployeeDashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
