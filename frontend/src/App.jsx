import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./components/Search"; // Correct import path

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={!token ? <Login setToken={setToken} /> : <Navigate to="/home" replace />} />
      <Route path="/home" element={token ? <Home /> : <Navigate to="/" replace />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} /> {/* Ensure this route exists */}
    </Routes>
  );
}

export default App;